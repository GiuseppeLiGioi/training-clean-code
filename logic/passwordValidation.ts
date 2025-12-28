import { ErrorMessage } from "../types/passwordTypes";

export const isPasswordValid = (password: string): ErrorMessage | null => {
  if (isPasswordEmpty(password)) return "La password inserita è vuota";
  if (containsSpaces(password)) return "La password contiene spazi";
  return null;
};

export const isPasswordEmpty = (password: string): boolean => {
  return password.length === 0;
};

export const containsSpaces = (password: string): boolean => {
  return password.includes(" ");
};
