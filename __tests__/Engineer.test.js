const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object")
});

test("Returns Engineer's name", () => {
    const emp = new Engineer("Caitlin");
    expect(emp.getName()).toBe("Caitlin");
});

test("Returns Engineer's id", () => {
    const emp = new Engineer("Caitlin", 5);
    expect(emp.getID()).toBe(5);
});

test("Returns Engineer's email", () => {
    const emp = new Engineer("Caitlin", 5, "test@test.com");
    expect(emp.getEmail()).toBe("test@test.com");
});

test("When I run getGitHub, returns github username", () => {
    const emp = new Engineer("Caitlin", 5, "test@test.com", "caitbopp");
    expect(emp.getGithub()).toBe("caitbopp");
});

test("When i run getRole, return Engineer" , () => {
    const emp = new Engineer("Caitlin", 5, "test@test.com", "caitbopp");
    expect(emp.getRole()).toBe("Engineer");
});

