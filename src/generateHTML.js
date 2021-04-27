
function generateHTML(employees) {
    if (employees === manager) {
        managerCard = "";
    } else {
        for (let i = 0; i < employees.length; i++) {
            managerCard +=
                `<div class="card">
        <header>
            <h2 id="name">${employees[i].name}</h2>
            <h3 id="role"><i class="material-icons">build</i>Manager</h3>
        </header>
        <div class="body">
            <ul>
                <li>ID: ${employees[i].id}</li>
                <li>Email: ${employees[i].email}</li>
                <li>Office Number: ${employees[i].officeNumber}</li>
            </ul>
        </div>
      </div>`
        }
    };
    
    
    if (employees === engineer) {
        engineerCard = "";
    } else {
        for (let i = 0; i < employees.length; i++) {
            engineerCard +=
                `<div class="card">
        <header>
            <h2 id="name">${employees[i].name}</h2>
            <h3 id="role"><i class="material-icons">build</i>Engineer</h3>
        </header>
        <div class="body">
            <ul>
                <li>ID: ${employees[i].id}</li>
                <li>Email: ${employees[i].email}</li>
                <li>GitHub: ${employees[i].github}</li>
            </ul>
        </div>
      </div>`
        }
    };

    if (employees === intern) {
        internCard = "";
    } else {
        for (let i = 0; i < employees.length; i++) {
            internCard +=
                `<div class="card">
        <header>
            <h2 id="name">${employees[i].name}</h2>
            <h3 id="role"><i class="material-icons">build</i>Intern</h3>
        </header>
        <div class="body">
            <ul>
                <li>ID: ${employees[i].id}</li>
                <li>Email: ${employees[i].email}</li>
                <li>GitHub: ${employees[i].school}</li>
            </ul>
        </div>
      </div>`
        }
    };



}




module.exports = generateHTML;