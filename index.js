const inquirer = require('inquirer');
const fs = require('fs');
//this will run the application 
//need to import the files from lib 
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'text',
            message: 'Enter text for the logo (Enter up to 3 characters)',
            //need validation for the logo to limit 3 characters
        },
        {
            type: 'input',
            name: 'text-color', 
            message: 'Enter a color or hexadecimal number for the logo text',
            //how to make sure it works, put validation to for if incorrect number entered?
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose which shape the logo should be',
            choices: [
                "circle",
                "traingle",
                "square"
            ]
        },
        {
            type: 'input',
            name: 'logo-color',
            message: 'Enter a color or hexadecimal number for the logo-color',
            //make sure it works, put validation for if incorrect color or number is used
        },
    ]);
};
//need a then statement to create a logo.svg file that takes the inputs and creates an image file
//when you open this file in the browser the image file is shown, in 300x200 pixel image 
