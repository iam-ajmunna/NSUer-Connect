import PageDecorator from './page_decorator.js';

class RemindersPageDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render();
    const remindersHTML = this.getRemindersHTML();
    this.page.setContent(remindersHTML); 
  }

  getRemindersHTML() {
    return `
      <section id="reminders" class="reminders-section">
        <h2 class="section-title">My Reminders</h2>
      
        <div id="reminder-list" class="reminder-subsection">
          <h3 class="subsection-title">Upcoming Reminders</h3>
          <ul class="reminder-list">
            <li class="reminder-item">
              <span class="reminder-time">[Date/Time]</span>
              <span class="reminder-text">[Reminder 1]</span>
              <button class="btn btn-delete-reminder">
                <i class="fas fa-trash-alt"></i>
              </button>
            </li>
            <li class="reminder-item">
              <span class="reminder-time">[Date/Time]</span>
              <span class="reminder-text">[Reminder 2]</span>
              <button class="btn btn-delete-reminder">
                <i class="fas fa-trash-alt"></i>
              </button>
            </li>
          </ul>
        </div>
        <div id="add-reminder" class="reminder-subsection">
          <h3 class="subsection-title">Add New Reminder</h3>
          <form id="add-reminder-form" class="form">
            <div class="input-group">
              <label for="reminder-text" class="form-label">Reminder Description</label>
              <input type="text" id="reminder-text" class="form-input" placeholder="Enter reminder description" required>
            </div>
            <div class="input-group">
              <label for="reminder-date" class="form-label">Date</label>
              <input type="date" id="reminder-date" class="form-input" required>
            </div>
            <div class="input-group">
              <label for="reminder-time" class="form-label">Time</label>
              <input type="time" id="reminder-time" class="form-input" required>
            </div>
            <button type="submit" class="btn btn-primary form-btn">Add Reminder</button>
          </form>
        </div>
      </section>
    `;
  }
}

export default RemindersPageDecorator;