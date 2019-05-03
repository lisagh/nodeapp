//write a function to call an event from another module


//call event from CallEvent_logger.js
const Logger = require('./CallEvent_logger');
const logger = new Logger; //create a new Logger instance

// register a listener
logger.on('loaded', function (e) {
    console.log('I called an emitter', e);
})

logger.log('call me first');