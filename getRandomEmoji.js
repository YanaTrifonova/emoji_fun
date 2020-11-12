const nodeEmoji = require('node-emoji');

const random = nodeEmoji.random();

console.log(`Here is your random "${random.key}" emoji – ${random.emoji}.`);