const fs = require('fs');
const protobuf = require('protocol-buffers');

const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));

console.log(schema);

const data = schema.Column.encode({
  id: 1,
  name: 'NODEJS',
  price: 0.4,
});

console.log(data);
console.log(schema.Column.decode(data));
