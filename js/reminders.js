import BasePage from './Decorator/base_page.js';
import RemindersPageDecorator from './Decorator/reminders_decorator.js';
import { Subject } from './Observer/observer.js';
import { NotificationObserver } from './Observer/notification_observer.js';

// Initialize page
const basePage = new BasePage();
const reminderPage = new RemindersPageDecorator(basePage);
reminderPage.render();
//console.log('After render:', document.querySelector('.container').innerHTML);

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

  // Helper to schedule a console log and popup at the reminder's time
  scheduleReminder(reminder) {
    const { description, date, time } = reminder;
    const reminderDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const delay = reminderDateTime - now; // Time difference in milliseconds

    if (delay > 0) {
      setTimeout(() => {
        console.log(`Reminder: ${description} at ${date} ${time}`);
        alert(`Reminder: ${description} at ${date} ${time}`);
      }, delay);
    }
  }

  addReminder(description, date, time) {
    const reminder = { description, date, time };
    this.reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(this.reminders));
    this.notify({ action: 'added', ...reminder });
    // Schedule the reminder notification
    this.scheduleReminder(reminder);
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

// Wait for content to be rendered before attaching event listeners
function setupReminderEvents() {
  const addForm = document.getElementById('add-reminder-form');
  const reminderList = document.querySelector('.reminder-list');

  console.log('setupReminderEvents:', { addForm, reminderList });

  if (!addForm || !reminderList) {
    setTimeout(setupReminderEvents, 100);
    return;
  }

  // Clear placeholder reminders and render initial reminders
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

  // Add reminder handler
  addForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reminderText = document.getElementById('reminder-text').value;
    const reminderDate = document.getElementById('reminder-date').value;
    const reminderTime = document.getElementById('reminder-time').value;
    
    if (reminderText && reminderDate && reminderTime) {
      const newReminderItem = document.createElement('li');
      newReminderItem.classList.add('reminder-item');
      newReminderItem.innerHTML = `
        <span class="reminder-time">${reminderDate} ${reminderTime}</span>
        <span class="reminder-text">${reminderText}</span>
        <button class="btn btn-delete-reminder">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;
      newReminderItem.dataset.description = reminderText;
      newReminderItem.dataset.date = reminderDate;
      newReminderItem.dataset.time = reminderTime;
      reminderList.appendChild(newReminderItem);
      
      // Add to ReminderManager
      reminderManager.addReminder(reminderText, reminderDate, reminderTime);
      
      // Clear form
      document.getElementById('reminder-text').value = '';
      document.getElementById('reminder-date').value = '';
      document.getElementById('reminder-time').value = '';
    }
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

// Start setting up events
setupReminderEvents();