import ReminderFactory from './reminderFactory.js'; // Import the factory
import BasePage from './Decorator/base_page.js';
import RemindersPageDecorator from './Decorator/reminders_decorator.js';

const basePage = new BasePage();
const reminderPage = new RemindersPageDecorator(basePage);
reminderPage.render();

let reminders = [];

// Request notification permissions from the user
function requestNotificationPermission() {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
}

// Check if any reminders are due and show notifications
function checkForDueReminders() {
  const currentDate = new Date();
  
  reminders.forEach(reminder => {
    const reminderDate = new Date(`${reminder.date}T${reminder.time}`);
    const timeDifference = reminderDate - currentDate;

    // If the reminder time is in the next 1 minute, show a notification
    if (timeDifference > 0 && timeDifference <= 60000) {
      showReminderNotification(reminder);
    }
  });
}

// Show a notification for a reminder
function showReminderNotification(reminder) {
  if (Notification.permission === 'granted') {
    const notification = new Notification('Reminder', {
      body: `${reminder.text} at ${reminder.date} ${reminder.time}`,
      icon: './images/logo.png', // Optional: add an icon
    });

    notification.onclick = function() {
      // Redirect user to the reminders page when they click the notification
      window.location.href = 'reminders.html';
    };
  }
}

// Function to setup reminder events (existing functionality)
function setupReminderEvents() {
  const addForm = document.getElementById('add-reminder-form');
  const reminderList = document.querySelector('.reminder-list');

  if (!addForm || !reminderList) {
    setTimeout(setupReminderEvents, 50);
    return;
  }

  addForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const reminderText = document.getElementById('reminder-text').value;
    const reminderDate = document.getElementById('reminder-date').value;
    const reminderTime = document.getElementById('reminder-time').value;

    if (reminderText && reminderDate && reminderTime) {
      // Use the ReminderFactory to create a new reminder
      const newReminder = ReminderFactory.createReminder(reminderText, reminderDate, reminderTime);
      reminders.push(newReminder);

      // Add to reminder list in the Reminders Page
      const newReminderItem = document.createElement('li');
      newReminderItem.classList.add('reminder-item');
      newReminderItem.innerHTML = `
        <span class="reminder-time">${reminderDate} ${reminderTime}</span>
        <span class="reminder-text">${reminderText}</span>
        <button class="btn btn-delete-reminder">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;
      reminderList.appendChild(newReminderItem);

      // Clear the form
      document.getElementById('reminder-text').value = '';
      document.getElementById('reminder-date').value = '';
      document.getElementById('reminder-time').value = '';

      // Update Dashboard with the new reminder
      updateDashboardReminder(newReminder);
    }
  });

  reminderList.addEventListener('click', function(event) {
    if (event.target.closest('.btn-delete-reminder')) {
      event.target.closest('.reminder-item').remove();
    }
  });
}

// Function to update the dashboard with the new reminder (existing functionality)
function updateDashboardReminder(reminder) {
  const dashboardUpcomingList = document.querySelector('.dashboard-upcoming-reminders');

  const newReminderItem = document.createElement('li');
  newReminderItem.classList.add('reminder-item');
  newReminderItem.innerHTML = `
    <span class="reminder-time">${reminder.date} ${reminder.time}</span>
    <span class="reminder-text">${reminder.text}</span>
  `;

  dashboardUpcomingList.appendChild(newReminderItem);
}

// Start setting up events and requesting notification permission
setupReminderEvents();
requestNotificationPermission();

// Check for due reminders every minute (60000ms)
setInterval(checkForDueReminders, 60000);
