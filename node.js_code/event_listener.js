// ���� events ģ��
var events = require('events');
// ���� eventEmitter ����
var eventEmitter = new events.EventEmitter();

// �����¼��������
var connectHandler = function connected() {
   console.log('connection successs');
  
   // ���� data_received �¼� 
   eventEmitter.emit('data_received');
}

// �� connection �¼��������
eventEmitter.on('connection', connectHandler);
 
// ʹ������������ data_received �¼�
eventEmitter.on('data_received', function(){
   console.log('data recesive successs');
});


eventEmitter.emit('connection');// ���� connection �¼� 
//eventEmitter.emit('data_received');//ֱ�Ӵ���data_recesived����

console.log("program execute over");
