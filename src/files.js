const fs = require('fs')
const mapFiles = new Map() // file<string> => path<string>

const reader = (directory, files = []) => {
    fs.readdirSync(directory, 'utf8')
        .forEach(file => {
            if (!file.includes('.svg')) {
                reader(`${directory}/${file}`, files)
            } else {
                files.push(`${directory}/${file}`)
                mapFiles.set(file, `${directory}/${file}`)
            }
        })
    return files
}
reader(`svg`)

const files = Array.from(mapFiles.values())

exports.keys = Array.from(mapFiles.keys())
exports.files = files