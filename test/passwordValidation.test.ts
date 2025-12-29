import {
  buildRequirementResult,
  evaluateRequirement,
  populateRequirements,
} from "../logic/passwordChecklist";
import {
  getPasswordColor,
  getPasswordFeedback,
  getPasswordMessage,
} from "../logic/passwordPresentation";
import {
  getPasswordStrength,
  hasMinimumCharacters,
  hasNumbers,
  hasOnlyLowercaseCharacters,
  hasSpecialCharacters,
  isMediumPassword,
  isStrongPassword,
} from "../logic/passwordStrength";
import { containsSpaces, isPasswordEmpty } from "../logic/passwordValidation";
import { PasswordCheck } from "../types/passwordTypes";

// Password Validation Tests
test("la funzione isPasswordEmpty restituisce true se la password è vuota", () => {
  expect(isPasswordEmpty("")).toBe(true);
});

test("la funzione containsSpace restituisce true se la password contiene spazi, altrimenti false", () => {
  expect(containsSpaces("a")).toBe(false);
  expect(containsSpaces("adffd bgbg")).toBe(true);
});

// Password Strength Tests
test("getPasswordStrength restituisce 'weak' per password debole", () => {
  expect(getPasswordStrength("abcdef")).toBe("weak");
});

test("getPasswordStrength restituisce 'medium' per password media", () => {
  expect(getPasswordStrength("abc123")).toBe("medium");
});

test("getPasswordStrength restituisce 'strong' per password forte", () => {
  expect(getPasswordStrength("abc123$£@#")).toBe("strong");
});

test("isStrongPassword restituisce true se la password è forte", () => {
  expect(isStrongPassword("abc123$£@#")).toBe(true);
});

test("isStrongPassword restituisce false se la password non è forte", () => {
  expect(isStrongPassword("abc123")).toBe(false);
});

test("isMediumPassword restituisce true se la password è media", () => {
  expect(isMediumPassword("abc123")).toBe(true);
});

test("isMediumPassword restituisce false se la password non è media", () => {
  expect(isMediumPassword("abcdef")).toBe(false);
});

test("hasMinimumCharacters restituisce true se la password ha almeno min caratteri", () => {
  expect(hasMinimumCharacters("abcdef", 6)).toBe(true);
});

test("hasMinimumCharacters restituisce false se la password ha meno di min caratteri", () => {
  expect(hasMinimumCharacters("abc", 6)).toBe(false);
});

test("hasOnlyLowercaseCharacters restituisce true se solo minuscole", () => {
  expect(hasOnlyLowercaseCharacters("abcdef")).toBe(true);
});

test("hasOnlyLowercaseCharacters restituisce false se ci sono maiuscole", () => {
  expect(hasOnlyLowercaseCharacters("abcDef")).toBe(false);
});

test("hasNumbers restituisce true se ci sono numeri", () => {
  expect(hasNumbers("abc123")).toBe(true);
});

test("hasNumbers restituisce false se non ci sono numeri", () => {
  expect(hasNumbers("abcdef")).toBe(false);
});

test("hasSpecialCharacters restituisce true se ci sono caratteri speciali", () => {
  expect(hasSpecialCharacters("abc@#")).toBe(true);
});

test("hasSpecialCharacters restituisce false se non ci sono caratteri speciali", () => {
  expect(hasSpecialCharacters("abcdef")).toBe(false);
});

//password Presentation test
test("getPasswordColor restituisce 'red' per weak", () => {
  expect(getPasswordColor("weak")).toBe("red");
});
test("getPasswordColor restituisce 'yellow' per medium", () => {
  expect(getPasswordColor("medium")).toBe("yellow");
});
test("getPasswordColor restituisce 'green' per strong", () => {
  expect(getPasswordColor("strong")).toBe("green");
});

test("getPasswordMessage restituisce 'password debole' per weak", () => {
  expect(getPasswordMessage("weak")).toBe("password debole");
});
test("getPasswordMessage restituisce 'password media' per medium", () => {
  expect(getPasswordMessage("medium")).toBe("password media");
});
test("getPasswordMessage restituisce 'password forte' per strong", () => {
  expect(getPasswordMessage("strong")).toBe("password forte");
});

test("getPasswordFeedback restituisce errore e rosso se password vuota", () => {
  const result = getPasswordFeedback("");
  expect(result.color).toBe("red");
});
test("getPasswordFeedback restituisce messaggio debole e rosso", () => {
  const result = getPasswordFeedback("abcdef");
  expect(result.color).toBe("red");
  expect(result.message).toBe("password debole");
});
test("getPasswordFeedback restituisce messaggio medio e giallo", () => {
  const result = getPasswordFeedback("abc123");
  expect(result.color).toBe("yellow");
  expect(result.message).toBe("password media");
});
test("getPasswordFeedback restituisce messaggio forte e verde", () => {
  const result = getPasswordFeedback("abc123$£@#");
  expect(result.color).toBe("green");
  expect(result.message).toBe("password forte");
});

//password Checklist test
describe("Password checklist helpers", () => {
  test("buildRequirementResult crea oggetto corretto", () => {
    const result = buildRequirementResult("number", true);
    expect(result).toEqual({ id: "number", satisfied: true });

    const result2 = buildRequirementResult("special", false);
    expect(result2).toEqual({ id: "special", satisfied: false });
  });

  test("evaluateRequirement restituisce true se requisito soddisfatto", () => {
    const requirement: PasswordCheck = { id: "number", check: hasNumbers };
    expect(evaluateRequirement("abc123", requirement)).toBe(true);
  });

  test("evaluateRequirement restituisce false se requisito non soddisfatto", () => {
    const requirement: PasswordCheck = { id: "number", check: hasNumbers };
    expect(evaluateRequirement("abcdef", requirement)).toBe(false);
  });

  test("populateRequirements restituisce array corretto con tutti i casi", () => {
    const rules: PasswordCheck[] = [
      { id: "min-6", check: (pw) => hasMinimumCharacters(pw, 6) },
      { id: "number", check: hasNumbers },
      { id: "special", check: hasSpecialCharacters },
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
      { id: "min-6", check: (pw) => hasMinimumCharacters(pw, 6) },
      { id: "number", check: hasNumbers },
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
