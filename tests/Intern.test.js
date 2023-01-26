const Intern = require("../lib/Intern");

const testIntern = new Intern("Mal", 12, "Mal@boot.com", "school");

test("can get the get name by using this function", () => {
  expect(testIntern.getName()).toBe("Mal");
});

test("you can get the user id by using getID function", () => {
  expect(testIntern.getID()).toBe(12);
});
test("testing the getEmail function", () => {
  expect(testIntern.getEmail()).toBe("Mal@boot.com");
});
test("can get the engineers role using the getRole function", () => {
  expect(testIntern.getRole()).toBe("Intern");
});

test("can get the engineers school by using the getSchool function", () => {
  expect(testIntern.getSchool()).toBe("Intern");
});
