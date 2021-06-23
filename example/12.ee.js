const EE = require('events').EventEmitter;

class GeekTime extends EE {
  constructor() {
    super();
    setInterval(() => {
      this.emit('newLesson', {
        price: Math.random() * 100,
      });
    }, 3000);
  }
}
const geekTime = new GeekTime();

geekTime.addListener('newLesson', (res) => {
  if (res.price < 80) {
    console.log('buy', res);
  }
});

// 不知道通知者存在
// 没有人听还能继续听下去
