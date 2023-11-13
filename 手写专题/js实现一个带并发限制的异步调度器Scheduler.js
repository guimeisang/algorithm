class Scheduler {
  constructor() {
    this.maxCount = 2
    this.queue = []
    this.run = []
  }

  add(task) {
    this.queue.push(task)
  }
  schedule() {
    if(this.run.length < this.count && this.queue.length) {
      const task = this.queue.shift()
      const 
    }
  }
}