//Modules

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// module.exports = sayHi
const names = require('./names');
const sayHi = require('./utils');

sayHi(names.john)
//when exporting functions we only have to module.exports = function()
// when exporting multiple values modele.exports = {one,two,etc} 
//Modules
const names = require('./names');
const sayHi = require('./utils');
// exporting functions /////////////////////////////////////////////////////////////////////////////////////////////////
// function sayHi(name){
//     console.log(`Hello there ${name}`);
// }
// module.exports = sayHi

//exporting variables//////////////////////////////////////////////////////////////////////////////////////////
// also we can wirte the export like this module.exports.items = ['item1','item2']
// const secret = 'SUPER SECRET';
// const john = 'John'
// const susan ="Susan"
// module.exports = { john , susan } 

sayHi(names.john)
//when exporting functions we only have to module.exports = function()
// when exporting multiple values modele.exports = {oen,two} 
