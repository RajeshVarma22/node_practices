
const { readFile, writeFile } = require('fs').promises
// const util = require('util')

// const utilReadFile = util.promisify(readFile)
// const utilWriteFile = util.promisify(writeFile)

const textToWrite = `This file is written with the help of promises as

const { readFile, writeFile } = require('fs').promises

Use this as shown in above. 
`

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8')
    const second = await readFile('./content/second.txt', 'utf-8')
    await writeFile('./content/promisesWriteFile.txt', textToWrite)
    console.log(`${first} ${second}`)
  } catch (error) {
    console.log(error)
  }
}

start()

const addBigFile = async () => {
  for (let index = 0; index < 100000; index++) {
    await writeFile('./content/bigFile.txt', `This is first index ${index}\n`, {flag: 'a'})
  }
}

addBigFile()

// const getText = async (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (error, data)=> {
//       if(error){
//         reject(error)
//       } else(
//         resolve(data)
//       )
//     })
//   })
// }



// getText('./content/first.txt').then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// })