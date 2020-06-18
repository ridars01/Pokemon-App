var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'What is your Trainer Name?',
        name:'trainerName'
    },
    {
        type: 'password',
        message: 'What is your Password?',
        name: 'trainerPassword'
    },
    {
        type: 'list',
        message: 'Choose your Starting Pokemon!',
        choices: ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu'],
        name: 'trainerChoice'
    },
    {
        type: 'confirm',
        message: 'Are you sure?',
        default: true,
        name: 'trainerConfirm'
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    if(answers.trainerConfirm === true) {
        console.log(`Hello ${answers.trainerName}, your ${trainerChoice} is ready for your journey!`);
    } else {
        console.log(`That's okay ${trainerName}, take your time!`);
    } 
    })
  .catch(error => {
    console.log('There was an error')
  });

let login = () => {
    console.log('Logging In...');
};

login();