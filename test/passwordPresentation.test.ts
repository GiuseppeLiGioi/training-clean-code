import { getPasswordColor } from "../logic/passwordPresentation";
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
