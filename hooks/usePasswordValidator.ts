import { getPasswordFeedback } from "@/logic/passwordPresentation";
import { useState } from "react";
import { PasswordDisplayData } from "../types/passwordTypes";
export default function usePasswordValidator() {
  const [password, setPassword] = useState<string>("");
  const [feedback, setFeedback] = useState<PasswordDisplayData | null>(null);

  const handleChangeText = (text: string): void => {
    setPassword(text);
    setFeedback(getPasswordFeedback(text));
  };

  return { handleChangeText, password, setPassword, feedback };
}
