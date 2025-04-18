import { Observer } from './observer.js';

export class DashboardObserver extends Observer {
  update(data) {
    console.log(`Dashboard: ${data.action} reminder - ${data.description}`);
    // Simulate dashboard update (e.g., append to a dashboard element)
    const dashboardElement = document.getElementById('dashboard-reminders');
    if (dashboardElement) {
      dashboardElement.innerHTML += `<p>${data.action}: ${data.description} at ${data.date} ${data.time}</p>`;
    }
  }
}