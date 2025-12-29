import {
  hasMinimumCharacters,
  hasNumbers,
  hasSpecialCharacters,
} from "../logic/passwordStrength";
import {
  PasswordCheck,
  PasswordRequirementResult,
} from "../types/passwordTypes";
export const passwordChecklistRules: PasswordCheck[] = [
  {
    label: "Contiene almeno 6 caratteri",
    check: (password) => hasMinimumCharacters(password, 6),
  },
  {
    label: "Contiene almeno un numero",
    check: (password) => hasNumbers(password),
  },
  {
    label: "Contiene almeno un carattere speciale (@#[]<>£$%&.-_!)",
    check: (password) => hasSpecialCharacters(password),
  },
  {
    label: "Contiene almeno un carattere speciale e un numero",
    check: (password) => hasSpecialCharacters(password) && hasNumbers(password),
  },
];

export const populateRequirements = (
  password: string,
  arr: PasswordCheck[]
): PasswordRequirementResult[] => {
  const requirementsResult: PasswordRequirementResult[] = [];
  for (let i = 0; i < arr.length; i++) {
    const isSatisfaied: boolean = evaluateRequirement(password, arr[i]);
    const newResult: PasswordRequirementResult = buildRequirementResult(
      arr[i].label,
      isSatisfaied
    );
    requirementsResult.push(newResult);
  }
  return requirementsResult;
};

export const buildRequirementResult = (
  id: string,
  satisfied: boolean
): PasswordRequirementResult => {
  const result: PasswordRequirementResult = { id, satisfied };
  return result;
};

export const evaluateRequirement = (
  password: string,
  requirement: PasswordCheck
): boolean => {
  const isSatisfaied: boolean = requirement.check(password);
  return isSatisfaied;
};
