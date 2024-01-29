const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./content/first.txt', 'utf-8')
const secondFile = readFileSync('./content/second.txt', 'utf-8')

console.log(firstFile);

let textAdded = `This contains text files of first and second as shown in below

${firstFile} 

${secondFile}`

writeFileSync('./content/third.txt', `This is third text file.

${textAdded}

This flag:'a' will append the same content again

`,{flag: 'a'})

