const { TestScheduler } = require("@jest/core");
const Employee = require("../lib/Employee");

TestScheduler("Can instantiate Employee instance", () => {
    const = new Employee();
    expect(typeof(e)).toBe("object")
});

// write tests for each function in Employee.js (getName, getID, getEmail, getRole)