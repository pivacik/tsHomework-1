import { expect, it } from "@jest/globals";

export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

it("Должна складывать два числа", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
