import { containsSpaces, isPasswordEmpty } from "../logic/passwordValidation";

// Password Validation Tests
test("la funzione isPasswordEmpty restituisce true se la password è vuota", () => {
  expect(isPasswordEmpty("")).toBe(true);
});

test("la funzione containsSpace restituisce true se la password contiene spazi, altrimenti false", () => {
  expect(containsSpaces("a")).toBe(false);
  expect(containsSpaces("adffd bgbg")).toBe(true);
});
