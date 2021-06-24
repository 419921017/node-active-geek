const net = require('net');

const socket = new net.Socket({});

socket.connect({
  host: '127.0.0.1',
  port: 8089,
});

socket.on('error', (error) => {
  console.log(error);
});
// socket.write('beautiful world');
const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let buffer;
let index = Math.floor(Math.random() * lessons.length);

setInterval(() => {
  index = Math.floor(Math.random() * lessons.length);
  socket.write(encode(index));
}, 2000);

socket.on('data', (buffer) => {
  let seqBuffer = buffer.slice(0, 2);
  let indexBuffer = buffer.slice(2);

  console.log(seqBuffer.readInt16BE(), indexBuffer.toString());
  index = Math.floor(Math.random() * lessons.length);
  socket.write(encode(index));
});

let seq = 0;
function encode(index) {
  buffer = Buffer.alloc(4);
  buffer.writeInt16BE(seq++);
  buffer.writeInt16BE(lessons[index], 2);
  return buffer;
}
