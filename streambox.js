const fs = require('fs')
const path = require('path')
const { Transform } = require('stream')


module.exports = {
    duplicate,
    transform,
}


// EPISODE_03
function duplicate(filename) {
    const { name, ext } = path.parse(filename)

    const readStream = fs.createReadStream(filename)
    const writeStream = fs.createWriteStream(`${name}.copy${ext}`)

    readStream.pipe(writeStream)
}


// EPISODE_04
function transform(filename, re, fn, in_stdout = true) {
    const transformer = new Transform({
        transform(chunk, _, callback) {
        this.push(chunk.toString().replace(re, fn))

        callback()
        }
    })

    const readStream = fs.createReadStream(filename)
  
    readStream
        .pipe(transformer)
        .pipe(process.stdout)
}