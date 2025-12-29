import {
  buildRequirementResult,
  evaluateRequirement,
  populateRequirements,
} from "../logic/passwordChecklist";
import {
  hasMinimumCharacters,
  hasNumbers,
  hasSpecialCharacters,
} from "../logic/passwordStrength";
import { PasswordCheck } from "../types/passwordTypes";

//password Checklist test
describe("Password checklist helpers", () => {
  test("buildRequirementResult crea oggetto corretto", () => {
    const result = buildRequirementResult("number", true);
    expect(result).toEqual({ id: "number", satisfied: true });

    const result2 = buildRequirementResult("special", false);
    expect(result2).toEqual({ id: "special", satisfied: false });
  });

  test("evaluateRequirement restituisce true se requisito soddisfatto", () => {
    const requirement: PasswordCheck = { label: "number", check: hasNumbers };
    expect(evaluateRequirement("abc123", requirement)).toBe(true);
  });

  test("evaluateRequirement restituisce false se requisito non soddisfatto", () => {
    const requirement: PasswordCheck = { label: "number", check: hasNumbers };
    expect(evaluateRequirement("abcdef", requirement)).toBe(false);
  });

  test("populateRequirements restituisce array corretto con tutti i casi", () => {
    const rules: PasswordCheck[] = [
      { label: "min-6", check: (pw) => hasMinimumCharacters(pw, 6) },
      { label: "number", check: hasNumbers },
      { label: "special", check: hasSpecialCharacters },
    ];

    const result = populateRequirements("abc1&", rules);

    expect(result).toEqual([
      { id: "min-6", satisfied: false },
      { id: "number", satisfied: true },
      { id: "special", satisfied: true },
    ]);
  });

  test("populateRequirements gestisce password vuota", () => {
    const rules: PasswordCheck[] = [
      { label: "min-6", check: (pw) => hasMinimumCharacters(pw, 6) },
      { label: "number", check: hasNumbers },
    ];

    const result = populateRequirements("", rules);

    expect(result).toEqual([
      { id: "min-6", satisfied: false },
      { id: "number", satisfied: false },
    ]);
  });

  test("populateRequirements gestisce array vuoto di requisiti", () => {
    const result = populateRequirements("abc123", []);
    expect(result).toEqual([]);
  });
});
