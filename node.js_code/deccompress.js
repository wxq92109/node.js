var fs = require("fs");
var zlib = require('zlib');

// ��ѹ input.txt.gz �ļ�Ϊ input.txt
fs.createReadStream('ziptest.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('ziptest.txt'));

console.log("deccopress exec over");