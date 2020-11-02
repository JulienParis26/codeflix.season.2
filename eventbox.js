module.exports = {
    empty,
    withArgs
}



// EPISODE_01
function empty() {
    const EventEmitter = require('events');

    const myEmitter = new EventEmitter;

    myEmitter.on('hi', () => {
        console.log('ChOooooooper!');
    });

    myEmitter.emit('hi');
}



// EPISODE_02
function withArgs(names) {
    const EventEmitter = require('events');

    const myEmitter = new EventEmitter;

    myEmitter.on('newFellow', (name) => {
        console.log(`Here com's a new pirate ->> ${name}`);
        
    });

    for (let i = 0; i < names.length; i++) {
        myEmitter.emit('newFellow', names[i]);
    }
}

