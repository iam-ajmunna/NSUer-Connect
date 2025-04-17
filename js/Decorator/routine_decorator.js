import PageDecorator from './page_decorator.js';

class RoutinePageDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render();
    const routineHTML = this.getRoutineHTML();
    this.page.setContent(routineHTML);
  }

  getRoutineHTML() {
    return `
    <h1>Weekly Schedule - Sarah Khan</h1>
            <div class="actions">
                <button class="action-button">Print</button>
                <button class="action-button">Export</button>
            </div>
      <div class="semester-selection">
        <label for="week">Select Week:</label>
        <select id="week">
          <option value="week1">Week 1 (Oct 23 - Oct 29)</option>
          <option value="week2">Week 2 (Oct 30 - Nov 05)</option>
        </select>
      </div>

      <div class="course-list">
        <h2>Schedule for Week 1 (Oct 23 - Oct 29)</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Location</th>
              <th>Instructor</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction to Programming</td>
              <td>Monday</td>
              <td>9:00 AM</td>
              <td>11:00 AM</td>
              <td>Lab A101</td>
              <td>Dr. Rahman</td>
              <td><button class="view-details" data-subject="Introduction to Programming">View</button></td>
            </tr>
            <tr>
              <td>Database Management</td>
              <td>Tuesday</td>
              <td>1:00 PM</td>
              <td>3:00 PM</td>
              <td>Lecture Hall 202</td>
              <td>Prof. Ahmed</td>
              <td><button class="view-details" data-subject="Database Management">View</button></td>
            </tr>
            <tr>
              <td>Web Development Basics</td>
              <td>Wednesday</td>
              <td>10:00 AM</td>
              <td>12:00 PM</td>
              <td>Computer Lab B201</td>
              <td>Ms. Fatima</td>
              <td><button class="view-details" data-subject="Web Development Basics">View</button></td>
            </tr>
            <tr>
              <td>Data Structures</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>4:00 PM</td>
              <td>Lecture Hall 301</td>
              <td>Dr. Khan</td>
              <td><button class="view-details" data-subject="Data Structures">View</button></td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>Friday</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>Lab C102</td>
              <td>Prof. Ali</td>
              <td><button class="view-details" data-subject="Operating Systems">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2 id="modal-subject"></h2>
          <p id="modal-details">Details will be shown here.</p>
        </div>
      </div>
    `;
  }
}

export default RoutinePageDecorator;