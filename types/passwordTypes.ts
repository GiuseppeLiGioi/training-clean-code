export type PasswordStrength = "weak" | "medium" | "strong";
export type PasswordColor = "red" | "yellow" | "green";
export type ErrorMessage =
  | "La password inserita è vuota"
  | "La password contiene spazi";
export type StrengthMessage =
  | "password debole"
  | "password media"
  | "password forte";

export type PasswordDisplayData = {
  message: string | null;
  color: PasswordColor;
};

export type PasswordCheck = {
  id: string;
  check: (password: string) => boolean;
};
export type PasswordRequirementResult = {
  id: string;
  satisfied: boolean;
};
