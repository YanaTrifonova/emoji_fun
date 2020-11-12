const nodeEmoji = require('node-emoji');

const input = process.argv[2];
const result = nodeEmoji.search(input);

if (result.length !== 0) {
    for (let element of result) {
        console.log(`I found ${element.emoji} emoji as ${element.key}.`);
    }
} else {
    console.log("Nothing has found!");
}