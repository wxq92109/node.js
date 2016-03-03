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
//��connection�¼���������Ϊlistener1
eventEmitter.addListener('connection',listener1);

//��connection�¼�����������listener2
eventEmitter.on('connection',listener2);

/*var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"Listener listen connection event");*/

//���������¼�
eventEmitter.emit('connection');

/*eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"listener listen connection event")*/

// �Ƴ���󶨵� listener1 ����
eventEmitter.removeListener('connection', listener1);
console.log("listener1 can not listen");

// ���������¼�
eventEmitter.emit('connection');

console.log("program exec over");

