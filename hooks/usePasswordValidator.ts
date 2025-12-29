import {
  passwordChecklistRules,
  populateRequirements,
} from "@/logic/passwordChecklist";
import { useCallback, useState } from "react";
import { PasswordRequirementResult } from "../types/passwordTypes";
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

  return { handleChangeText, password, setPassword, checklist };
}
