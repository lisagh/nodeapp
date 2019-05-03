const EventEmitter = require('events');

var url = "https://ththlisa.github.io";

class Logger extends EventEmitter {
    log(message) {
        //send a http request
        console.log(message);
        //raise an event 
        //loaded is an event, the object is the date of the event
        this.emit('loaded', { id: 0, message: 'I am an emitter', url });
    }
}


//objects are all private in this module(file)

//now export objects

module.exports = Logger;
