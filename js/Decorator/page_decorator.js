import BasePage from './base_page.js';

class PageDecorator extends BasePage {
  constructor(page) {
    super();
    this.page = page;
  }

  setContent(htmlContent) {
    if (this.page.setContent) {
      this.page.setContent(htmlContent);
    }
  }

  render() {
    if (this.page.render) {
      this.page.render();
    }
  }
}

export default PageDecorator;