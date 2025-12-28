import { PasswordStrength } from "../types/passwordTypes";

export const getPasswordStrength = (password: string): PasswordStrength => {
  if (isStrongPassword(password)) return "strong";
  else if (isMediumPassword(password)) return "medium";
  else return "weak";
};

export const isStrongPassword = (password: string): boolean => {
  return (
    hasMinimumCharacters(password, 8) &&
    hasNumbers(password) &&
    hasSpecialCharacters(password)
  );
};

export const isMediumPassword = (password: string): boolean => {
  const minChars = hasMinimumCharacters(password, 6);
  if (!minChars) return false;
  if (isStrongPassword(password)) return false;

  const hasNum = hasNumbers(password);
  const hasSpecial = hasSpecialCharacters(password);

  return hasNum || hasSpecial;
};

export const hasMinimumCharacters = (
  password: string,
  min: number
): boolean => {
  return password.length >= min;
};

export const hasOnlyLowercaseCharacters = (password: string): boolean => {
  return password === password.toLowerCase();
};

export const hasNumbers = (password: string): boolean => {
  const numbers = "0123456789";
  return password.split("").some((c) => numbers.includes(c));
};

export const hasSpecialCharacters = (password: string): boolean => {
  const specials = "@#[]<>£$%&.-_";
  return password.split("").some((c) => specials.includes(c));
};
