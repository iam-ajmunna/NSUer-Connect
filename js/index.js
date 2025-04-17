import BasePage from './Decorator/base_page.js';
import InitialContentDecorator from './Decorator/index_decorator.js';
import PhpAuthAdapter from './Adapter/PhpAuthAdapter.js';
import FirebaseAuthAdapter from './Adapter/FirebaseAuthAdapter.js';

// Initialize page with decorators
const basePage = new BasePage();
const initialPage = new InitialContentDecorator(basePage);
initialPage.render();

// Utility functions and message handling
function showMessage(elementId, message, isError = true) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.style.color = isError ? 'red' : 'green';
  setTimeout(() => element.textContent = '', 3000);
}

function togglePasswordVisibility(input, toggleButton) {
  if (input.type === 'password') {
    input.type = 'text';
    toggleButton.textContent = '🔓';
  } else {
    input.type = 'password';
    toggleButton.textContent = '🔒';
  }
}

// Initialize authentication adapters
const phpAuthAdapter = new PhpAuthAdapter();
const firebaseAuthAdapter = new FirebaseAuthAdapter();

// Setup event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Password toggle functionality
  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const input = e.target.previousElementSibling;
      togglePasswordVisibility(input, e.target);
    });
  });

  // Tab switching logic
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');

  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      
      authTabs.forEach(t => t.classList.remove('active'));
      authForms.forEach(form => form.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Login form handler with fallback
  document.getElementById('login')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Authenticating...';
    
    // Reset error states
    document.getElementById('login-id').classList.remove('input-error');
    document.getElementById('login-password').classList.remove('input-error');
    
    const loginId = document.getElementById('login-id').value.trim();
    const loginPassword = document.getElementById('login-password').value.trim();

    if (!loginId || !loginPassword) {
      showMessage('login-error', 'Please enter both ID and password');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    let currentAuthAdapter = null;

    const loginWithFallback = async (username, password) => {
      try {
        await phpAuthAdapter.login(username, password);
        currentAuthAdapter = phpAuthAdapter;
        sessionStorage.setItem('currentUser', JSON.stringify(await currentAuthAdapter.getCurrentUser()));
        showMessage('login-error', 'Login successful (PHP)! Redirecting...', false);
      } catch (phpError) {
        console.error('PHP Authentication error:', phpError);
        try {
          await firebaseAuthAdapter.login(username, password);
          currentAuthAdapter = firebaseAuthAdapter;
          sessionStorage.setItem('currentUser', JSON.stringify(await currentAuthAdapter.getCurrentUser()));
          showMessage('login-error', 'Login successful (Firebase)! Redirecting...', false);
        } catch (firebaseError) {
          console.error('Firebase Authentication error:', firebaseError);
          throw new Error('Both PHP and Firebase authentication failed.');
        }
      }
    };

    const logout = async () => {
      if (currentAuthAdapter) {
        try {
          await currentAuthAdapter.logout();
          sessionStorage.clear();
          showMessage('login-error', 'Logout successful!', false);
        } catch (error) {
          showMessage('login-error', 'Logout failed.', true);
        }
      } else {
        showMessage('login-error', 'No user is currently logged in.', true);
      }
    };

    const isAuthenticated = async () => {
      if (currentAuthAdapter) {
        return await currentAuthAdapter.isAuthenticated();
      }
      return false;
    };

    const getCurrentUser = async () => {
      if (currentAuthAdapter) {
        return await currentAuthAdapter.getCurrentUser();
      }
      return null;
    };

    try {
      await loginWithFallback(loginId, loginPassword);
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    } catch (error) {
      showMessage('login-error', error.message, true);
      document.getElementById('login-id').classList.add('input-error');
      document.getElementById('login-password').classList.add('input-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });

  // Signup form handler
  document.getElementById('signup')?.addEventListener('submit', function(event) {
    event.preventDefault();
    showMessage('signup-error', 'Account creation is currently disabled. Please contact admin.');
  });
});