const zlib = require('zlib');
const fs = require('fs');

const inputFile = fs.createReadStream('executable_bash.sh');
const outputFile = fs.createWriteStream('executable_bash.zip');

inputFile.pipe(zlib.createGzip()).pipe(outputFile);
