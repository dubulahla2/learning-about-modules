import chalk from 'chalk';
import figlet from 'figlet';
//import the greet module that is in the current folder
import greet from './greet.js'

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)
// const for_xola = chalk.rgb(123, 45, 67).bgBlue 
 
// const fig_xola = figlet.textSync  

// console.log(for_xola(greet('Xola')))
console.log(figlet.textSync(greet('Xola'), {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
