//event.js нд╪Ч
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
	console.log('touch success!'); 
}); 
function tt(){
	
	for(var i = 9; i > 0;i--)
	{
			
		
		setTimeout(function() { 
			event.emit('some_event'); 
		}, 5000);
		console.log("i = "+i)
	 }
}
tt();