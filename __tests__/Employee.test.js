const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test("Returns employee name", () => {
    const e = new Employee("Bob");
    expect(e.getName()).toBe("Bob");
});

test("Returns employee id", () => {
    const e = new Employee("Bob", 2);
    expect(e.getID()).toBe(2);
});

test("Returns employee email", () => {
    const e = new Employee("Bob", 2, "test@test.com");
    expect(e.getEmail()).toBe("test@test.com");
});

test("When i run getRole, return Employee" , () => {
    const e = new Employee("Bob", 2, "test@test.com");
    expect(e.getRole()).toBe("Employee");
});
