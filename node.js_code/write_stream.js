var fs = require("fs");
var data = "this is a write stream test***************************";

var writeStream = fs.createWriteStream('output.txt');

//ʹ��utf8����д������
writeStream.write(data,'UTF8');
//����ļ���ĩβ
writeStream.end();

//�������¼�-->data ,and error
writeStream.on('finish',function(){
	console.log("write over");
});

writeStream.on('error',function(err){
	console.log("err.stack");
});

console.log("program exec over");