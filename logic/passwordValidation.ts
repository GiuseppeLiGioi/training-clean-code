import { PasswordError } from "@/types/passwordTypes";

export const isPasswordValid = (password: string): PasswordError[] => {
  const errors: PasswordError[] = [];
  if (isPasswordEmpty(password)) {
    errors.push("empty");
  }
  if (containsSpaces(password)) {
    errors.push("containsSpace");
  }
  return errors;
};

export const isPasswordEmpty = (password: string): boolean => {
  return password.length === 0;
};

export const containsSpaces = (password: string): boolean => {
  return password.includes(" ");
};
