const { createReadStream } = require('fs')


const stream = createReadStream('./content/bigFile.txt', { highWaterMark: 7000 });

stream.on('data', (result) => {
    console.log(result)
})

