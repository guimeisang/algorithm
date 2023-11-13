const timeout = (order, time) => new Promise(resolve => setTimeout(resolve(), time))

class Scheduler {
  constructor() {
    this.maxCount = 2
    this.runCount = 0
    this.queue = []
    this.run = []
  }
  addTask(timer, task) {
    this.queue.push(timeout(task, timer).then(() => console.log(task)))
  }
  start() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request()
    }
  }
  request() {
    if(!this.queue || !this.queue.length || this.runCount >= this.maxCount) {
      return
    }
    this.runCount++

    this.queue.shift().then(() => {
      this.runCount--
      this.request()
    })
  }
}



const scheduler = new Scheduler()

scheduler.addTask(1000, '1');
scheduler.addTask(500, '2');
scheduler.addTask(300, '3');
scheduler.addTask(400, '4');

scheduler.start()