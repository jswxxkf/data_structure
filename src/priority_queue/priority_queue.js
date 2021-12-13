import { Queue } from '../queue/queue';

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}
