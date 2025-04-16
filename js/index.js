import BasePage from './Decorator/base_page.js';
import InitialContentDecorator from './Decorator/initial_content_decorator.js';

// Initialize page with decorators
const basePage = new BasePage();
const initialPage = new InitialContentDecorator(basePage);
initialPage.render();

// Fallback users (only used if PHP backend fails)
const fallbackUsers = [
  { id: '2211796', password: 'test123' }, // Add your test credentials
  { id: '112233', password: '1234' }
];

// Utility functions
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

  // Login form handler with PHP backend and fallback
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

    try {
      // Try PHP authentication first
      const response = await fetch('php/auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nsu_id: loginId,
          password: loginPassword
      })
      });

      if (!response.ok) {
        throw new Error('Network response not ok');
      }

      const data = await response.json();
      
      if (data.success) {
        // Store user data in session
        sessionStorage.setItem('currentUser', JSON.stringify(data.user || { nsu_id: loginId }));
        showMessage('login-error', 'Login successful! Redirecting...', false);
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      } else {
        throw new Error(data.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      
      // Fallback to hardcoded check if PHP fails
      const fallbackUser = fallbackUsers.find(u => 
        u.id === loginId && u.password === loginPassword
      );
      
      if (fallbackUser) {
        showMessage('login-error', 'Login successful!', false);
        sessionStorage.setItem('currentUser', JSON.stringify({ nsu_id: loginId }));
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
      } else {
        showMessage('login-error', error.message.includes('Network') ? 
          'Connection error. Trying Again After Sometime...' : error.message);
        document.getElementById('login-id').classList.add('input-error');
        document.getElementById('login-password').classList.add('input-error');
      }
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