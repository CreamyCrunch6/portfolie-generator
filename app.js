//const fs = require('fs');
//const generatePage = require('./src/page-template.js');
//
//const profileDataArgs = process.argv.slice(2);
//
//const [name , github] = profileDataArgs;
//
//fs.writeFile('./index.html', generatePage("Josh" , "CreamyCrunch6"), err => {
//  if (err) throw new Error(err);
//
//  console.log('Portfolio complete! Check out index.html to see the output!');
//});
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

//const generatePage = (userName, githubName) => {
//  return `
//    Name: ${userName}
//    Github: ${githubName}
//  `;
//};

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

console.log(name, github);
console.log(generatePage(name, github));