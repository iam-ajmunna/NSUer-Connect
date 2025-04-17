// js/Decorator/component_interface.js
export default class PageComponent {
    render() {
      throw new Error('render() method not implemented');
    }
    
    setContent(htmlContent) {
      throw new Error('setContent() method not implemented');
    }
  }