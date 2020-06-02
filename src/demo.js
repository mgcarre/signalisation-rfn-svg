const fs = require('fs')
const { keys } = require('./files')
const getDataParam = (key) => {
    const dataParamed = ['TIV D FIXE', 'TIV D MOB', 'TIV PENDIS', 'TIV PENEXE', 'TIV R MOB', 'TIVD B FIX', 'TIVD C FIX', 'ARRET VOY']
    const param = dataParamed.find(param => key.indexOf(param) > -1)
    if (param) {
        let value = key.replace(param, '').trim()
        return ` data-param="${value}"`
    }
    return ''

}
const elem = keys.map(key => key.replace('.svg', ''))
const body = elem.map(value => `<div><p>Clé: <b>${value}</b> et dataset ? ${getDataParam(value)} <span class="signalisation-rfn ${value}"${getDataParam(value)}></span></p></div>`).join('')
const demo = `<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/bundle.css">
</head>

<body>
    <div class="grid">${body}</div>
</body>
</html>`

fs.writeFileSync('index.html', demo)