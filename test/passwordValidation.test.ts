import {
  getPasswordStrength,
  hasMinimumCharacters,
  hasNumbers,
  hasOnlyLowercaseCharacters,
  hasSpecialCharacters,
  isMediumPassword,
  isStrongPassword,
  isWeakPassword,
} from "../logic/passwordStrength";
import { containsSpaces, isPasswordEmpty } from "../logic/passwordValidation";

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

test("isWeakPassword restituisce true se la password è debole", () => {
  expect(isWeakPassword("abcdef")).toBe(true);
});

test("isWeakPassword restituisce false se la password non è debole", () => {
  expect(isWeakPassword("abc123")).toBe(false);
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
