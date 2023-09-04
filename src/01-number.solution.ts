import { expect, it } from "@jest/globals";

export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

it("Должна складывать два числа", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
