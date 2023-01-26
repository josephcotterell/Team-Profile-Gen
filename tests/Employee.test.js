const Employee = require("../lib/Employee");

const testEmployee = new Employee("Joe", 10, "joe@boot.com");

test("can get the get name by using this function", () => {
  expect(testEmployee.getName()).toBe("Joe");
});
test("can get the user id using getID function", () => {
  expect(testEmployee.getId()).toBe(10);
});
test("testing the getEmail function", () => {
  expect(testEmployee.getEmail()).toBe("joe@boot.com");
});
test("can get the employees role using the getRole function", () => {
  expect(testEmployee.getRole()).toBe("employee");
});
