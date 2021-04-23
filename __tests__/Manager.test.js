const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object")
});

test("Returns Manager's name", () => {
    const emp = new Manager("Carleigh");
    expect(emp.getName()).toBe("Carleigh");
});

test("Returns Manager's id", () => {
    const emp = new Manager("Carleigh", 2819);
    expect(emp.getID()).toBe(2819);
});

test("Returns Manager's email", () => {
    const emp = new Manager("Carleigh", 2819, "test@test.com");
    expect(emp.getEmail()).toBe("test@test.com");
});

test("When I run getOfficeNumber, returns Manager's office number", () => {
    const emp = new Manager("Carleigh", 2819, "test@test.com", 1107);
    expect(emp.getOfficeNumber()).toBe(1107);
});

test("When i run getRole, return Manager" , () => {
    const emp = new Manager("Carleigh", 2819, "test@test.com", 1107);
    expect(emp.getRole()).toBe("Manager");
});