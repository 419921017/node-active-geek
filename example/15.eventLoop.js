const eventLoop = {
  queue: [],
  fsqueue: [],
  timeoutqueue: [],
  loop() {
    while (this.queue.length) {
      const callback = this.queue.shift();
      callback();
    }
    setTimeout(this.loop.bind(this), 50);
  },
  add(callback) {
    this.queue.push(callback);
  },
};

eventLoop.loop();

setTimeout(() => {
  eventLoop.add(() => {
    console.log(1);
  });
}, 500);

setTimeout(() => {
  eventLoop.add(() => {
    console.log(2);
  });
}, 1000);
