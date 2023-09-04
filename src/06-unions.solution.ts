interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * Нужно сузить набор ролей до следующих:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: "admin" | "user" | "support";
}

export const wrongUser: User = {
  id: 1,
  firstName: "Dmitrii",
  lastName: "Pozdniakov",
  // @ts-expect-error
  role: "Неверная роль должна приводить к ошибке",
};

export const correctUser: User = {
  id: 1,
  firstName: "Dmitrii",
  lastName: "Pozdniakov",
  role: "user",
};

export const correctAdmin: User = {
  id: 1,
  firstName: "Dmitrii",
  lastName: "Pozdniakov",
  role: "admin",
};
