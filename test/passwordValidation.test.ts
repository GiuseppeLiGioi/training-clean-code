import { containsSpaces, isPasswordEmpty } from "../logic/passwordValidation";

test("la funzione isPasswordEmpty restituisce true se la password è vuota e false se la password presenta almeno un carattere", () => {
  expect(isPasswordEmpty("")).toBe(true);
});

test("la funzione containsSpace restituisce true se la password contiene spazi, altrimenti false", () => {
  expect(containsSpaces("a")).toBe(false);
  expect(containsSpaces("adffd bgbg")).toBe(true);
});
