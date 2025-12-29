import {
  hasMinimumCharacters,
  hasNumbers,
  hasSpecialCharacters,
} from "../logic/passwordStrength";
import {
  PasswordCheck,
  PasswordRequirementResult,
} from "../types/passwordTypes";
const passwordChecklistRules: PasswordCheck[] = [
  {
    id: "min-8",
    check: (password) => hasMinimumCharacters(password, 8),
  },
  {
    id: "min-6",
    check: (password) => hasMinimumCharacters(password, 6),
  },
  {
    id: "number",
    check: (password) => hasNumbers(password),
  },
  {
    id: "special",
    check: (password) => hasSpecialCharacters(password),
  },
  {
    id: "number-special",
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
      arr[i].id,
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
