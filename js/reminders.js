// reminders.js
 

 // Basic client-side script to add/remove reminder items (for demonstration)
 document.getElementById('add-reminder-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   
  
    const reminderText = document.getElementById('reminder-text').value;
    const reminderDate = document.getElementById('reminder-date').value;
    const reminderTime = document.getElementById('reminder-time').value;
   
  
    if (reminderText && reminderDate && reminderTime) {
    const reminderList = document.querySelector('.reminder-list');
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
   
  
    // Clear form fields
    document.getElementById('reminder-text').value = '';
    document.getElementById('reminder-date').value = '';
    document.getElementById('reminder-time').value = '';
    }
   });
   
  
   // Event delegation to handle delete reminder clicks
   document.querySelector('.reminder-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-delete-reminder') || event.target.closest('.btn-delete-reminder')) {
    const reminderItem = event.target.closest('.reminder-item');
    reminderItem.remove();
    }
   });