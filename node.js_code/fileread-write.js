var fs = require("fs");

//�첽��ȡ
fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}
	console.log("�첽��ȡ��"+data.toString());
});

//ͬ����ȡ
var data = fs.readFileSync('input.txt');
console.log("ͬ����ȡ��"+data.toString());

console.log("program exec over");