const myWord = require('./hello2.js');

function sayHello() {
    console.log('Hello' + myWord.word() + ' this is' + myWord.name() +'!');
}

sayHello();

console.log(myWord.mysteryMultiplier(10))