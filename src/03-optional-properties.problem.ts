import { expect, it } from "@jest/globals";

export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Должен принимать в себя только first без last", () => {
  const name = getName({
    first: "Dmitrii",
  });

  expect(name).toEqual("Dmitrii");
});

it("Должен принимать в себя и first и last ", () => {
  const name = getName({
    first: "Dmitrii",
    last: "Pozdniakov",
  });

  expect(name).toEqual("Dmitrii Pozdniakov");
});
