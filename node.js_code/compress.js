var fs = require("fs");
var zlib = require('zlib');

//Ñ¹Ëõziptest.txtÎªziptest.txt.gz
fs.createReadStream('ziptest.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('ziptest.txt.gz'));

console.log("file compress over");
