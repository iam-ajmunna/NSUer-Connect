export class Observer {
  update(data) {
    throw new Error("Observer update method must be implemented");
  }
}

export class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    if (observer instanceof Observer && !this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}