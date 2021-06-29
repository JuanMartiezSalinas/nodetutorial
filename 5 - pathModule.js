const path = require('path')


console.log(path.sep);
// method for normalize path
const filepath = path.join('/content','subfolder','test.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const abs = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(abs);

// got to do further investigation on this method