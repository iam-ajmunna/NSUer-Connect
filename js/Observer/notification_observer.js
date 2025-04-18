import { Observer } from './observer.js';

export class NotificationObserver extends Observer {
  update(data) {
    console.log(`Notification: ${data.action} reminder - ${data.description} at ${data.date} ${data.time}`);
  }
}