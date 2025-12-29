import {
  passwordChecklistRules,
  populateRequirements,
} from "@/logic/passwordChecklist";
import { getPasswordFeedback } from "@/logic/passwordPresentation";
import { useCallback, useState } from "react";
import {
  PasswordDisplayData,
  PasswordRequirementResult,
} from "../types/passwordTypes";
export default function usePasswordValidator() {
  const [password, setPassword] = useState<string>("");
  const [feedback, setFeedback] = useState<PasswordDisplayData | null>(null);
  const [checklist, setChecklist] = useState<
    PasswordRequirementResult[] | null
  >([]);

  const handleChangeText = useCallback((text: string) => {
    setPassword(text);
    const passwordChecklistState: PasswordRequirementResult[] =
      populateRequirements(text, passwordChecklistRules);
    setChecklist(passwordChecklistState);
    setFeedback(getPasswordFeedback(text));
  }, []);

  return { handleChangeText, password, setPassword, feedback, checklist };
}
