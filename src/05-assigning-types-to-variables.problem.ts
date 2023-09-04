import { expect, it } from "@jest/globals";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * Нужно убедиться, что defaultUser типа User
 */
const defaultUser: User = {
  id: 1,
  firstName: "Dmitrii",
  lastName: "Pozdniakov",
  isAdmin: true,
};

const getUserId = (user: User) => {
  return user.id;
};

it("Должен получать id пользователя", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
