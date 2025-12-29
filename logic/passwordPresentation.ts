import { PasswordColor, PasswordStrength } from "../types/passwordTypes";

export const getPasswordColor = (strength: PasswordStrength): PasswordColor => {
  if (strength === "weak") return "red";
  else if (strength === "medium") return "yellow";
  else return "green";
};
