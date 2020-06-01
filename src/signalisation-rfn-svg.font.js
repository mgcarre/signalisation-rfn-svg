const files = require('./files').files
const path = require('path');

const paths = files.map(file => path.resolve(file))

module.exports = {
    'files': [
        '../sprites/_svg/*.svg'
    ],
    'fontName': 'signalisation-rfn-svg',
    'classPrefix': 'signalisation-rfn-svg-',
    'baseSelector': '.signalisation-rfn-svg',
    'types': ['woff2', 'ttf'],
    'fileName': '[fontname].[ext]'
};