// index.js
 

 // Mock user data (replace with server-side database in a real application)
 const users = [
    { id: '112233', email: 'user1@nsu.edu', password: '1234' },
    { id: '222222222', email: 'user2@nsu.edu', password: 'password2' }
   ];
   
  
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
   
  
   // Mock login
   document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
   
  
    const loginId = document.getElementById('login-id').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');
   
  
    const user = users.find(u => u.id === loginId && u.password === loginPassword);
   
  
    if (user) {
    // Simulate successful login (in a real app, you'd set a session or token)
    alert('Login Successful!');
    window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
    loginError.textContent = 'Invalid ID or password.';
    }
   });
   
  
   // Mock signup
   document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
   
  
    const signupId = document.getElementById('signup-id').value;
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;
    const signupConfirmPassword = document.getElementById('signup-confirm-password').value;
    const signupError = document.getElementById('signup-error');
   
  
    if (signupPassword !== signupConfirmPassword) {
    signupError.textContent = 'Passwords do not match.';
    return;
    }
   
  
    // Simulate user creation (in a real app, you'd save to a database)
    const existingUser = users.find(u => u.id === signupId || u.email === signupEmail);
    if (existingUser) {
    signupError.textContent = 'ID or email already exists.';
    } else {
    users.push({ id: signupId, email: signupEmail, password: signupPassword });
    alert('Sign Up Successful! Please login.');
    // Switch back to login tab
    authTabs.forEach(t => t.classList.remove('active'));
    authForms.forEach(form => form.classList.remove('active'));
    authTabs[0].classList.add('active');
    authForms[0].classList.add('active');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-error').textContent = '';
    document.getElementById('signup-error').textContent = '';
    document.getElementById('signup-id').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('signup-confirm-password').value = '';
    }
   });