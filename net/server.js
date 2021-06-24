const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    const seqBuffer = buffer.slice(0, 2);
    const lessonId = buffer.readInt16BE(2);
    console.log('data[lessonId]', data[lessonId]);
    let res = data[lessonId];
    setTimeout(() => {
      const buffer = Buffer.concat([seqBuffer, Buffer.from(res)]);
      console.log('buffer', buffer);
      socket.write(buffer);
    }, 1000);
  });
});
server.listen(8089, () => {
  console.log('server listened 8089');
});

const data = {
  1: '11',
  2: '22',
  3: '33',
  4: '44',
  5: '55',
  6: '66',
  7: '77',
  8: '88',
  9: '99',
  10: '1010',
  11: '1111',
};
