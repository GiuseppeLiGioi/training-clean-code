import { useCallback, useState } from "react";
import {
  passwordChecklistRules,
  populateRequirements,
} from "../logic/passwordChecklist";
import { getPasswordColor } from "../logic/passwordPresentation";
import { getPasswordStrength } from "../logic/passwordStrength";
import {
  BarData,
  PasswordRequirementResult,
  PasswordStrength,
} from "../types/passwordTypes";
export default function usePasswordValidator() {
  const [password, setPassword] = useState<string>("");
  const [checklist, setChecklist] = useState<
    PasswordRequirementResult[] | null
  >([]);

  const handleChangeText = useCallback((text: string) => {
    setPassword(text);
    const passwordChecklistState: PasswordRequirementResult[] =
      populateRequirements(text, passwordChecklistRules);
    setChecklist(passwordChecklistState);
  }, []);

  const getBarData = (password: string): BarData => {
    const strength = getPasswordStrength(password);
    const color = getPasswordColor(strength);
    const percent = calculatePercent(strength);
    return { color, percent, strength };
  };

  const calculatePercent = (strength: PasswordStrength): number => {
    const percent =
      strength === "strong" ? 100 : strength === "medium" ? 66 : 33;
    return percent;
  };

  return { handleChangeText, password, setPassword, checklist, getBarData };
}
