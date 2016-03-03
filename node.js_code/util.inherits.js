var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello '+this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
};
Base.prototype.showBase = function(){
	console.log(this.base);
}
function Sub(){
	this.name = 'Sub';
}
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
objBase.showBase();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);
//objSub.sayHello();
