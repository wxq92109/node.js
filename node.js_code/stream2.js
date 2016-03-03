var fs = require("fs");

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将内容写入到output.txt文件中
readStream.pipe(writeStream);

console.log("program exec over");