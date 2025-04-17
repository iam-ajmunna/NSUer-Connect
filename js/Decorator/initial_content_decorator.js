import PageDecorator from './page_decorator.js';

class InitialContentDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render();
    const initialContentHTML = this.getInitialContentHTML();
    this.page.setContent(initialContentHTML);
  }

  getInitialContentHTML() {
    return `
      <section id="auth-forms" class="auth-forms">
        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="login-form">Login</button>
          <button class="auth-tab" data-tab="signup-form">Sign Up</button>
        </div>

        <div id="login-form" class="auth-form active">
          <h2 class="form-title">Login</h2>
          <form id="login" class="form">
            <div class="input-group">
              <label for="login-id" class="form-label">NSU ID</label>
              <input type="text" id="login-id" class="form-input" placeholder="Enter your NSU ID" required>
            </div>
            <div class="input-group">
              <label for="login-password" class="form-label">Password</label>
              <div class="password-wrapper">
                <input type="password" id="login-password" class="form-input" placeholder="Enter your password" required>
                <button type="button" class="password-toggle">👀</button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary form-btn">Login</button>
            <p id="login-error" class="form-message"></p>
          </form>
        </div>

        <div id="signup-form" class="auth-form">
          <h2 class="form-title">Sign Up</h2>
          <form id="signup" class="form">
            <div class="input-group">
              <label for="signup-id" class="form-label">NSU ID</label>
              <input type="text" id="signup-id" class="form-input" placeholder="Enter your NSU ID" required>
            </div>
            <div class="input-group">
              <label for="signup-email" class="form-label">Email</label>
              <input type="email" id="signup-email" class="form-input" placeholder="Enter your email" required>
            </div>
            <div class="input-group">
              <label for="signup-password" class="form-label">Password</label>
              <div class="password-wrapper">
                <input type="password" id="signup-password" class="form-input" placeholder="Create a password (min 8 chars)" required>
                <button type="button" class="password-toggle">👀</button>
              </div>
            </div>
            <div class="input-group">
              <label for="signup-confirm-password" class="form-label">Confirm Password</label>
              <div class="password-wrapper">
                <input type="password" id="signup-confirm-password" class="form-input" placeholder="Confirm your password" required>
                <button type="button" class="password-toggle">👀</button>
              </div>
            </div>
            <button type="submit" class="btn btn-secondary form-btn">Sign Up</button>
            <p id="signup-error" class="form-message"></p>
          </form>
        </div>
      </section>
    `;
  }
}

export default InitialContentDecorator;