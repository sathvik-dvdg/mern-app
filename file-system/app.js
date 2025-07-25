// file system

// const fs = require('fs')

// const read = fs.readFileSync

// const write = fs.writeFileSyn

const{readFileSync,writeFileSync} =require('fs')
console.log("1")
const read = readFileSync('./simple/first.txt', 'utf-8')
console.log("2")
console.log(read)
writeFileSync('./simple/first.txt',' i ',{flag: 'a'})
console.log("3")
 writeFileSync('./simple/second.txt',' sathwik ',{flag: 'a'})
console.log("4")