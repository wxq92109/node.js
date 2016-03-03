var events = require('events')
var eventEmitter = new events.EventEmitter();

//Listener 1
var listener1 = function listener1()
{
	console.log("listener1 executing");
}//Listener 2
var listener2 = function listener2()
{
	console.log("listener2 executing");
}
//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);

//绑定connection事件，处理函数数listener2
eventEmitter.on('connection',listener2);

/*var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"Listener listen connection event");*/

//触发连接事件
eventEmitter.emit('connection');

/*eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"listener listen connection event")*/

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 can not listen");

// 触发连接事件
eventEmitter.emit('connection');

console.log("program exec over");

