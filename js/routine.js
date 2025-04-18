import BasePage from './Decorator/base_page.js';
import RoutineDecorator from './Decorator/routine_decorator.js';

const basePage = new BasePage();
const routinePage = new RoutineDecorator(basePage);
routinePage.render();

// JavaScript for modal functionality
const modal = document.getElementById("myModal");
const modalSubject = document.getElementById("modal-subject");
const modalDetails = document.getElementById("modal-details");
const viewButtons = document.querySelectorAll(".view-details");
const closeButton = document.querySelector(".close");

viewButtons.forEach(button => {
    button.addEventListener("click", function () {
        const subject = this.getAttribute("data-subject");
        modalSubject.textContent = subject;
        modalDetails.textContent = `Detailed information for ${subject} can be found in NSU Official Website.`;
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Week selection functionality
document.getElementById('week')?.addEventListener('change', function() {
  // Update displayed schedule based on selected week
  document.querySelector('.course-list h2').textContent = 
    `Schedule for ${this.options[this.selectedIndex].text}`;
});