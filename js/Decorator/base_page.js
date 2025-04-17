// js/Decorator/base_page.js
import PageComponent from './component_interface.js';

export default class BasePage extends PageComponent {
  constructor() {
    super();
    this.header = document.querySelector('header')?.cloneNode(true);
    this.nav = document.querySelector('nav')?.cloneNode(true);
    this.footer = document.querySelector('footer')?.cloneNode(true);
    this.main = document.createElement('main');
    this.main.className = 'main';
  }

  setContent(htmlContent) {
    this.main.innerHTML = htmlContent;
  }

  render() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    container.innerHTML = '';
    if (this.header) container.appendChild(this.header);
    if (this.nav) container.appendChild(this.nav);
    container.appendChild(this.main);
    if (this.footer) container.appendChild(this.footer);
  }
}