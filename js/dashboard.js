import BasePage from './Decorator/base_page.js';
import DashboardPageDecorator from './Decorator/dashboard_decorator.js';
import { Subject } from './Observer/observer.js';
import { NotificationObserver } from './Observer/notification_observer.js';

// Initialize the dashboard page
const basePage = new BasePage();
const dashboardPage = new DashboardPageDecorator(basePage);
dashboardPage.render();
console.log('After render:', document.querySelector('.container').innerHTML);

// Reminder Manager as a Subject
class ReminderManager extends Subject {
  constructor() {
    super();
    try {
      const storedReminders = localStorage.getItem('reminders');
      this.reminders = storedReminders ? JSON.parse(storedReminders) : [
        { description: "Team Meeting", date: "2025-04-18", time: "10:00" },
        { description: "Submit Assignment", date: "2025-04-19", time: "23:59" },
      ];
      // Schedule existing reminders
      this.reminders.forEach(reminder => this.scheduleReminder(reminder));
    } catch (error) {
      console.error('Error parsing localStorage reminders:', error);
      this.reminders = [
        { description: "Team Meeting", date: "2025-04-18", time: "10:00" },
        { description: "Submit Assignment", date: "2025-04-19", time: "23:59" },
      ];
      this.reminders.forEach(reminder => this.scheduleReminder(reminder));
    }
  }

  // Helper to schedule an alert popup at the reminder's time
  scheduleReminder(reminder) {
    const { description, date, time } = reminder;
    console.log('Scheduling reminder:', { description, date, time }); // Debug
    const reminderDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const delay = reminderDateTime - now; // Time difference in milliseconds
    console.log('Delay:', delay); // Debug

    if (delay > 0) {
      setTimeout(() => {
        console.log(`Reminder: ${description} at ${date} ${time}`);
        alert(`Reminder: ${description} at ${date} ${time}`);
      }, delay);
    }
  }

  deleteReminder(description, date, time) {
    this.reminders = this.reminders.filter(
      r => !(r.description === description && r.date === date && r.time === time)
    );
    localStorage.setItem('reminders', JSON.stringify(this.reminders));
    this.notify({ action: 'deleted', description, date, time });
  }
}

// Initialize ReminderManager and add observer
const reminderManager = new ReminderManager();
reminderManager.addObserver(new NotificationObserver());

// Wait for content to be rendered before updating reminders
function setupReminderEvents() {
  const reminderList = document.querySelector('.dashboard-widgets .widget .reminder-list');
  console.log('setupReminderEvents:', { reminderList });

  if (!reminderList) {
    console.log('Retrying setupReminderEvents...');
    setTimeout(setupReminderEvents, 100);
    return;
  }

  // Clear static reminders and render from ReminderManager
  reminderList.innerHTML = '';
  reminderManager.reminders.forEach(reminder => {
    const newReminderItem = document.createElement('li');
    newReminderItem.classList.add('reminder-item');
    newReminderItem.innerHTML = `
      <span class="reminder-time">${reminder.date} ${reminder.time}</span>
      <span class="reminder-text">${reminder.description}</span>
      <button class="btn btn-delete-reminder">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;
    newReminderItem.dataset.description = reminder.description;
    newReminderItem.dataset.date = reminder.date;
    newReminderItem.dataset.time = reminder.time;
    reminderList.appendChild(newReminderItem);
  });

  // Delete reminder handler (event delegation)
  reminderList.addEventListener('click', function(event) {
    if (event.target.closest('.btn-delete-reminder')) {
      const reminderItem = event.target.closest('.reminder-item');
      const description = reminderItem.dataset.description;
      const date = reminderItem.dataset.date;
      const time = reminderItem.dataset.time;
      
      reminderItem.remove();
      reminderManager.deleteReminder(description, date, time);
    }
  });
}

// Start setting up reminders after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  setupReminderEvents();
});