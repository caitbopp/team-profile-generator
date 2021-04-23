const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object")
});

test("Returns employee name", () => {
    const emp = new Employee("Bob");
    expect(emp.getName()).toBe("Bob");
});

test("Returns employee id", () => {
    const emp = new Employee("Bob", 2);
    expect(emp.getID()).toBe(2);
});

test("Returns employee email", () => {
    const emp = new Employee("Bob", 2, "test@test.com");
    expect(emp.getEmail()).toBe("test@test.com");
});

test("When i run getRole, return Employee" , () => {
    const emp = new Employee("Bob", 2, "test@test.com");
    expect(emp.getRole()).toBe("Employee");
});
