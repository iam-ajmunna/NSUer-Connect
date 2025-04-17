import BasePage from './Decorator/base_page.js';
import RemindersPageDecorator from './Decorator/reminders_decorator.js';

// Initialize page
const basePage = new BasePage();
const reminderPage = new RemindersPageDecorator(basePage);
reminderPage.render();

// Wait for content to be rendered before attaching event listeners
function setupReminderEvents() {
  const addForm = document.getElementById('add-reminder-form');
  const reminderList = document.querySelector('.reminder-list');

  if (!addForm || !reminderList) {
    // Retry after a short delay if elements aren't available yet
    setTimeout(setupReminderEvents, 50);
    return;
  }

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
      reminderList.appendChild(newReminderItem);
      
      // Clear form
      document.getElementById('reminder-text').value = '';
      document.getElementById('reminder-date').value = '';
      document.getElementById('reminder-time').value = '';
    }
  });

  // Delete reminder handler (event delegation)
  reminderList.addEventListener('click', function(event) {
    if (event.target.closest('.btn-delete-reminder')) {
      event.target.closest('.reminder-item').remove();
    }
  });
}

// Start setting up events
setupReminderEvents();