import BasePage from './Decorator/base_page.js';
import InitialContentDecorator from './Decorator/index_decorator.js';

// Immediately render page structure
const basePage = new BasePage();
const initialPage = new InitialContentDecorator(basePage);
initialPage.render();

// Auth system with proper fallback
document.addEventListener('DOMContentLoaded', async () => {
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');

  authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
          // Deactivate all tabs and forms
          authTabs.forEach(t => t.classList.remove('active'));
          authForms.forEach(f => f.classList.remove('active'));

          // Activate the clicked tab
          tab.classList.add('active');

          // Activate the corresponding form
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

  // Show loading state
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'auth-loading';
  loadingIndicator.textContent = 'Initializing authentication...';
  document.querySelector('main').prepend(loadingIndicator);

  // Initialize adapters with error handling
  let phpAdapter, firebaseAdapter;

  try {
    // 1. Try loading PHP adapter first
    const { default: PhpAuthAdapter } = await import('./Adapter/PhpAuthAdapter.js');
    phpAdapter = new PhpAuthAdapter();
    console.log("PHP adapter initialized");
  } catch (phpError) {
    console.error("PHP adapter failed:", phpError);
  }

  try {
    // 2. Try loading Firebase adapter
    const { default: FirebaseAuthAdapter } = await import('./Adapter/FirebaseAuthAdapter.js');
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

  // Remove loading indicator
  loadingIndicator.remove();

  // Show warning if both adapters failed
  if (!phpAdapter && !firebaseAdapter) {
    const errorElement = document.createElement('div');
    errorElement.className = 'auth-error';
    errorElement.textContent = 'Authentication unavailable. Please try again later.';
    document.querySelector('main').prepend(errorElement);
    return;
  }

  // Auth functions with proper fallback
  async function loginUser(username, password) {
    // 1. First try PHP
    if (phpAdapter) {
      try {
        const success = await phpAdapter.login(username, password);
        if (success) {
          console.log("Logged in via PHP");
          return { success: true, adapter: phpAdapter };
        }
      } catch (phpError) {
        console.warn("PHP login failed:", phpError.message);
      }
    }

    // 2. Fallback to Firebase
    if (firebaseAdapter) {
      try {
        const success = await firebaseAdapter.login(username, password);
        if (success) {
          console.log("Logged in via Firebase");
          return { success: true, adapter: firebaseAdapter };
        }
      } catch (firebaseError) {
        console.warn("Firebase login failed:", firebaseError.message);
      }
    }

     // 3. Hardcoded Fallback
     if (
        (username === '2211796' && password === '1111') ||
        (username === '2233550' && password === '2222')
      ) {
        console.log("Logged in via Hardcoded");
        return { success: true, adapter: 'hardcoded' };
      }

    // 4. All attempts failed
    throw new Error(phpAdapter ?
      "PHP login failed. Firebase not available." :
      "All authentication methods failed");
  }

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
      const result = await loginUser(username, password);
      if (result.success) {
        // Store user session
        let user = { nsu_id: username };
        if(result.adapter != 'hardcoded'){
            user = await result.adapter.getCurrentUser();
        }

        sessionStorage.setItem('currentUser', JSON.stringify(user || { nsu_id: username }));

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
