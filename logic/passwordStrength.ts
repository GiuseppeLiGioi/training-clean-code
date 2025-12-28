import { PasswordStrength } from "@/types/passwordTypes";

export const getPasswordStrength = (password: string): PasswordStrength => {
  if (isWeakPassword(password)) return "weak";
  else if (isMediumPassword(password)) return "medium";
  else return "strong";
};

export const isStrongPassword = (password: string): boolean => {
  return (
    hasMinimumCharacters(password, 8) &&
    hasNumbers(password) &&
    hasSpecialCharacters(password)
  );
};

export const isMediumPassword = (password: string): boolean => {
  return (
    hasMinimumCharacters(password, 6) &&
    hasNumbers(password) &&
    !hasSpecialCharacters(password)
  );
};

export const isWeakPassword = (password: string): boolean => {
  return (
    hasMinimumCharacters(password, 6) &&
    hasOnlyLowercaseCharacters(password) &&
    !hasNumbers(password)
  );
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
  const specials = "@#[]<>£$%";
  return password.split("").some((c) => specials.includes(c));
};
