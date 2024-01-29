const path = require('path')

const filePath = path.join('/content/','subfolder','test1.txt')
console.log(filePath)
console.log(path.sep)
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','test1.txt')
console.log(absolute);
console.log(__dirname);