
const EventEmitter = require('events');



const Logger = require('./logger');
const logger = new Logger;
// register a listner
logger.on('loaded', function (e) {
    console.log('I called an emitter', e);
})

logger.log('I made it');