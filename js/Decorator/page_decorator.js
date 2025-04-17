import BasePage from './base_page.js';

class PageDecorator extends BasePage {
  constructor(page) {
    super();
    this.page = page;
  }

  setContent(htmlContent) {
    this.page.setContent(htmlContent);
  }

  render() {
    this.page.render();
  }
}

export default PageDecorator;