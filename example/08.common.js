// console.log(setTimeout);

// console.log(setInterval);

// console.log(setImmediate);

// console.log(__dirname);
// console.log(__filename);

// // console.log(requestAnimationFrame);

// console.log(process);

// const playerAction = process.argv[process.argv.length - 1];

const game = require('./08.lib');

// let result = game(playerAction);
// console.log(result);

let count = 0;

process.stdin.on('data', (e) => {
  const playerAction = e.toString().trim();

  let result = game(playerAction);
  console.log(result);
  if (result == -1) {
    count++;
  }
  if (count == 3) {
    console.log('你太厉害了, 我不玩了');
    process.exit();
  }
});
