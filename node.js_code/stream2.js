var fs = require("fs");

//����һ���ɶ���
var readStream = fs.createReadStream('input.txt');

//����һ����д��
var writeStream = fs.createWriteStream('output.txt');

//�ܵ���д����
//��ȡinput.txt�ļ����ݣ���������д�뵽output.txt�ļ���
readStream.pipe(writeStream);

console.log("program exec over");