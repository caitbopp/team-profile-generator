const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object")
});

test("Returns Intern's name", () => {
    const emp = new Intern("Ben");
    expect(emp.getName()).toBe("Ben");
});

test("Returns Intern's id", () => {
    const emp = new Intern("Ben", 84);
    expect(emp.getID()).toBe(84);
});

test("Returns Intern's email", () => {
    const emp = new Intern("Ben", 84, "test@test.com");
    expect(emp.getEmail()).toBe("test@test.com");
});

test("When I run getSchool, returns Intern's school", () => {
    const emp = new Intern("Ben", 84, "test@test.com", "Rider University");
    expect(emp.getSchool()).toBe("Rider University");
});

test("When i run getRole, return Intern" , () => {
    const emp = new Intern("Ben", 84, "test@test.com", "Rider University");
    expect(emp.getRole()).toBe("Intern");
});

