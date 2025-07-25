// a sync

const { readFile, writeFile } = require('fs')
// //callback is the function passed inside the another function as a argument
console.log("1")
readFile('./simple/first.txt','utf-8', (err, res) => {
    if (err) {
        return
    }
    // const read = res;
    console.log("2")

})
writeFile('./simple/first.txt',"sathvik", (err, res) => {
    if (err) {
        return
    }
    console.log("3")
})

console.log("4")


// const{readFileSync,writeFileSync} =require('fs')
// console.log("1")
// const read = readFileSync('./simple/first.txt', 'utf-8')
// console.log("2")
// console.log(read)
// writeFileSync('./simple/first.txt',' i ',{flag: 'a'})
// console.log("3")
//  writeFileSync('./simple/second.txt',' sathwik ',{flag: 'a'})
// console.log("4")