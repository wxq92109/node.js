/*buf = new Buffer(16);
len = buf.write("www.runoob.com");

console.log( buf.toString('ascii'));       // ���: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // ���: abcde
console.log( buf.toString('utf8',0,5));    // ���: abcde
console.log( buf.toString(undefined,0,5)); // ʹ�� 'utf8' ����, �����: abcde
*/
/*
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log("json:"+json);
*/

var buffer1 = new Buffer('ABC');
// ����һ��������
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());