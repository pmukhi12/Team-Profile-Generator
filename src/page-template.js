
function generateCards(team) {
    const generateManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class= "card-title">${manager.getRole()}</h3>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}" >${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                  </ul>
              </div>
            </div>
        </div>`
    };
    const generateEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class= "card-title">${engineer.getRole()}</h3>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}" >${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                  </ul>
              </div>
            </div>
        </div>`
    }
    const generateIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class= "card-title">${intern.getRole()}</h3>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}" >${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                  </ul>
              </div>
            </div>
        </div>`
    }
    const cardsArray = [];
    cardsArray.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        .join(''));
    cardsArray.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(''));
    cardsArray.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join(''));

    return cardsArray.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>My Team</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${generateCards(team)}
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>

</html>
    `
}