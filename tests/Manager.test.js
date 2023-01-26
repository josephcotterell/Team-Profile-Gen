const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Kat", 15, "kat@boot.com", 5);
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager role", () => {
  const manager = new Manager("Kat", 15, "kat@boot.com", 5);

  expect(manager.getRole()).toEqual("Manager");
});
