import { getPasswordStrength } from "../logic/passwordStrength";
import { isPasswordValid } from "../logic/passwordValidation";
import {
  ErrorMessage,
  PasswordColor,
  PasswordDisplayData,
  PasswordStrength,
  StrengthMessage,
} from "../types/passwordTypes";

export const getPasswordFeedback = (password: string): PasswordDisplayData => {
  const passwordError: ErrorMessage | null = isPasswordValid(password);
  if (passwordError) {
    return {
      message: passwordError,
      color: "red",
    };
  }
  const strength = getPasswordStrength(password);
  return {
    message: getPasswordMessage(strength),
    color: getPasswordColor(strength),
  };
};

export const getPasswordColor = (strength: PasswordStrength): PasswordColor => {
  if (strength === "weak") return "red";
  else if (strength === "medium") return "yellow";
  else return "green";
};

export const getPasswordMessage = (
  strength: PasswordStrength
): StrengthMessage => {
  if (strength === "weak") return "password debole";
  else if (strength === "medium") return "password media";
  else return "password forte";
};
