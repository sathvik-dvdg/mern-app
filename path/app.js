// path module

const path = require('path')

console.log(path.sep)

const file = path.join('os', 'app.js')
console.log(file)

const base = path.basename(file)
console.log(base)

const cmp = path.resolve(__dirname, 'os', 'app.js')
console.log(cmp)
console.log(__dirname)