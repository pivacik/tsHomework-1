import { expect, it } from "@jest/globals";

export const getName = (first: string, last: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Должен принимать в себя только first без last", () => {
  const name = getName("Dmitrii");

  expect(name).toEqual("Dmitrii");
});

it("Должен принимать в себя и first и last", () => {
  const name = getName("Dmitrii", "Pozdniakov");

  expect(name).toEqual("Dmitrii Pozdniakov");
});
