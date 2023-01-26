const Engineer = require("../lib/Engineer");

const testEngineer = new Engineer("Ann", 11, "Ann@bootcamp.com", "school");

test("can get the get name by using this function", () => {
  expect(testEngineer.getName()).toBe("Ann");
});

test("you can get the user id by using getID function", () => {
  expect(testEngineer.getID()).toBe(11);
});
test("testing the getEmail function", () => {
  expect(testEngineer.getEmail()).toBe("Ann@boot.com");
});
test("can get the engineers role using the getRole function", () => {
  expect(testEngineer.getRole()).toBe("Engineer");
});

test("can get the engineers school by using the getSchool function", () => {
  expect(testEngineer.getSchool()).toBe("Engineer");
});
