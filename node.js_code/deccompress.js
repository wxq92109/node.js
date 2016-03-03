var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('ziptest.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('ziptest.txt'));

console.log("deccopress exec over");