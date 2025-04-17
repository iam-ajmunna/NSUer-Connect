import BasePage from './Decorator/base_page.js';
import InitialContentDecorator from './Decorator/index_decorator.js';
import PhpAuthAdapter from './Adapter/PhpAuthAdapter.js';
import FirebaseAuthAdapter from './Adapter/FirebaseAuthAdapter.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCVUfpmXqdgitv-cmAJ-BQtv67Tt1NBwM",
  authDomain: "nsuer-connect.firebaseapp.com",
  projectId: "nsuer-connect",
  storageBucket: "nsuer-connect.firebasestorage.app",
  messagingSenderId: "980081739885",
  appId: "1:980081739885:web:1c19f430d1acb0dd40d764",
  measurementId: "G-7YN8FX8FPL"
};

// Initialize page with decorators
const basePage = new BasePage();
const initialPage = new InitialContentDecorator(basePage);
initialPage.render();

// Create adapter instances
const phpAdapter = new PhpAuthAdapter();
const firebaseAdapter = new FirebaseAuthAdapter(firebaseConfig);
let currentAuthAdapter = null;

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

// Authentication functions
async function loginWithFallback(username, password) {
  try {
    await phpAdapter.login(username, password);
    currentAuthAdapter = phpAdapter;
    return true;
  } catch (phpError) {
    try {
      await firebaseAdapter.login(username, password);
      currentAuthAdapter = firebaseAdapter;
      return true;
    } catch (firebaseError) {
      throw new Error('Both PHP and Firebase authentication failed.');
    }
  }
}

async function signupWithFallback(nsuId, email, password) {
  try {
    await phpAdapter.signup(nsuId, email, password);
    return true;
  } catch (phpError) {
    try {
      await firebaseAdapter.signup(email, password);
      return true;
    } catch (firebaseError) {
      throw new Error('Both PHP and Firebase signup failed.');
    }
  }
}
async function logout() {
  if(currentAuthAdapter){
    await currentAuthAdapter.logout();
    currentAuthAdapter = null;
    sessionStorage.clear();
  }
}

async function isAuthenticated() {
  if(currentAuthAdapter){
    return await currentAuthAdapter.isAuthenticated();
  }
  return false;
}

async function getCurrentUser() {
  if(currentAuthAdapter){
    return await currentAuthAdapter.getCurrentUser();
  }
  return null;
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
      if (!loginId) document.getElementById('login-id').classList.add('input-error');
      if (!loginPassword) document.getElementById('login-password').classList.add('input-error');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    try {
        await loginWithFallback(loginId, loginPassword);
        const user = await getCurrentUser();
        sessionStorage.setItem('currentUser', JSON.stringify(user || { nsu_id: loginId }));
        showMessage('login-error', 'Login successful! Redirecting...', false);
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
    } catch (error) {
      console.error('Authentication error:', error);
      showMessage('login-error', error.message);
      document.getElementById('login-id').classList.add('input-error');
      document.getElementById('login-password').classList.add('input-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });

  // Signup form handler
  document.getElementById('signup')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Creating Account...';

    // Reset error states
    document.getElementById('signup-nsu-id').classList.remove('input-error');
    document.getElementById('signup-email').classList.remove('input-error');
    document.getElementById('signup-password').classList.remove('input-error');
    
    const signupNsuId = document.getElementById('signup-nsu-id').value.trim();
    const signupEmail = document.getElementById('signup-email').value.trim();
    const signupPassword = document.getElementById('signup-password').value.trim();

    if (!signupNsuId || !signupEmail || !signupPassword) {
      showMessage('signup-error', 'Please fill in all fields');
      if (!signupNsuId) document.getElementById('signup-nsu-id').classList.add('input-error');
      if (!signupEmail) document.getElementById('signup-email').classList.add('input-error');
      if (!signupPassword) document.getElementById('signup-password').classList.add('input-error');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    try {
      await signupWithFallback(signupNsuId, signupEmail, signupPassword);
      showMessage('signup-error', 'Signup successful! Redirecting...', false);
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1500);
    } catch (error) {
      console.error('Signup error:', error);
      showMessage('signup-error', error.message);
      document.getElementById('signup-nsu-id').classList.add('input-error');
      document.getElementById('signup-email').classList.add('input-error');
      document.getElementById('signup-password').classList.add('input-error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
  });
});