const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  let firstRead = result;

  readFile('./content/second.txt', 'utf-8', (err, res) => {
    if (err) return err
    let secondRead = res

    writeFile('./content/first-async-file.txt', `This is the first file that is asynchronous and contains both files text........
    ${firstRead},${secondRead}`, (err) => {
      if (err) return err
    })
  })
})