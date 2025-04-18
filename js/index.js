import BasePage from './Decorator/base_page.js';
import InitialContentDecorator from './Decorator/index_decorator.js';
import AuthProxy from './Proxy/auth_proxy.js';

// Immediately render page structure
const basePage = new BasePage();
const initialPage = new InitialContentDecorator(basePage);
initialPage.render();

// Initialize auth proxy
const authProxy = new AuthProxy();

// Auth system for login
document.addEventListener('DOMContentLoaded', () => {
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');

  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      authTabs.forEach(t => t.classList.remove('active'));
      authForms.forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      const formId = tab.dataset.tab;
      document.getElementById(formId).classList.add('active');
    });
  });

  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const passwordInput = toggle.previousElementSibling;
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      toggle.textContent = type === 'password' ? '👀' : '👁️';
    });
  });

  // Login form handler
  document.getElementById('login')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="auth-spinner"></span> Authenticating...';

    const username = document.getElementById('login-id').value.trim();
    const password = document.getElementById('login-password').value.trim();

    try {
      const result = await authProxy.login(username, password);
      if (result.success) {
        sessionStorage.setItem('currentUser', JSON.stringify(result.user));
        showMessage('login-error', 'Login successful! Redirecting...', false);
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
      }
    } catch (error) {
      showMessage('login-error', error.message);
      console.error("Login failed:", error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });

  // Utility functions
  function showMessage(elementId, message, isError = true) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = message;
      element.style.color = isError ? 'red' : 'green';
      setTimeout(() => element.textContent = '', 5000);
    }
  }
});

// Initializing Munna's PHP and Firebase Adapter
let phpAdapter, firebaseAdapter;

// প্রথমে PHP Load করার চেষ্টা করবো
try {
  const { default: PhpAuthAdapter } = await import('../Adapter/PhpAuthAdapter.js');
  phpAdapter = new PhpAuthAdapter();
  console.log("PHP adapter initialized");
} catch (phpError) {
  console.error("PHP adapter failed:", phpError);
}

// তারপর FireBase Load করার চেষ্টা করবো
try {
  const { default: FirebaseAuthAdapter } = await import('../Adapter/FirebaseAuthAdapter.js');
  firebaseAdapter = new FirebaseAuthAdapter({
    apiKey: "AIzaSyBCVUfpmXqdgitv-cmAJ-BQtv67Tt1NBwM",
    authDomain: "nsuer-connect.firebaseapp.com",
    projectId: "nsuer-connect",
    storageBucket: "nsuer-connect.appspot.com",
    messagingSenderId: "980081739885",
    appId: "1:980081739885:web:1c19f430d1acb0dd40d764"
  });
  console.log("Firebase adapter initialized");
} catch (firebaseError) {
  console.error("Firebase adapter failed:", firebaseError);
}

