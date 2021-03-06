function managerCard(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h3>${data.name}</h3>
        <p>
            <i class="fa fa-coffee" aria-hidden="true"></i>
            Manager
        </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">Office number: ${data.officeNumber}</li>
        </ul>
    </div>
</div>`
};


function engineerCard(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    <h3>${data.name}</h3>
        <p>
        <i class="fa fa-cog" aria-hidden="true"></i>
        Engineer
        </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">GitHub: ${data.gitHub}</li>
        </ul>
    </div>
</div>`
};

function internCard(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    <h3>${data.name}</h3>
        <p>
        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        Intern
        </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>
</div>`
};


function generateHTML(employees) {
    let card = "";
    employees.forEach(person => {
        if (person.getRole() === "Manager") {
            card += managerCard(person);
        } else if (person.getRole() === "Engineer") {
            card += engineerCard(person);
        } else if (person.getRole() === "Intern") {
            card += internCard(person);
        };
    })
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    
        <main>
            <div id="roles">
            ${card}
            </div>
        </main>
    
    </body>
    
    </html>
    `

};


module.exports = generateHTML;