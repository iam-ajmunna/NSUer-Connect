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
    <h1>Weekly Schedule - Assaduzzaman Munna</h1>
            <div class="actions">
                <button class="action-button">Print</button>
                <button class="action-button">Export</button>
            </div>
      <div class="semester-selection">
        <label for="semk">Select Semester:</label>
        <select id="sem">
          <option value="sem1">Spring 2025</option>        
        </select>
      </div>

      <div class="course-list">
        <h2>Schedule for Spring 2025</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Location</th>
              <th>Faculty Initial</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software Engineering</td>
              <td>RA</td>
              <td>1:00 PM</td>
              <td>2:10 pM</td>
              <td>NAC301</td>
              <td>IqN</td>
              <td><button class="view-details" data-subject="Software Engineering">View</button></td>
            </tr>
            <tr>
              <td>Design and Analysis of Algorithms</td>
              <td>MW</td>
              <td>9:40 AM</td>
              <td>11:10 AM</td>
              <td>SAC206</td>
              <td>SfM1</td>
              <td><button class="view-details" data-subject="Design and Analysis of Algorithms">View</button></td>
            </tr>
            <tr>
              <td>Junior Design Course</td>
              <td>MW</td>
              <td>02:40 PM</td>
              <td>04:10 PM</td>
              <td>LIB608</td>
              <td>RIH</td>
              <td><button class="view-details" data-subject="Junior Design Course">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2 id="modal-subject"></h2>
          <p id="modal-details">Details will be shown on NSU Official Website.</p>
        </div>
      </div>
    `;
  }
}

export default RoutinePageDecorator;