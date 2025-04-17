import AuthInterface from './AuthInterface.js';

class PhpAuthAdapter extends AuthInterface {
  constructor(authUrl = 'php/auth.php', signupUrl = 'php/signup.php') {
    super();
    this.authUrl = authUrl;
    this.signupUrl = signupUrl;
  }

  async login(username, password) {
    try {
      const response = await fetch(this.authUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nsu_id: username,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        return true;
      } else {
        throw new Error(data.error || 'Invalid credentials');
      }
    } catch (error) {
      throw new Error('PHP Login failed: ' + error.message);
    }
  }

  async logout() {
    try {
      const response = await fetch(this.authUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          logout: true
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return true;
    } catch (error) {
      throw new Error('PHP Logout failed: ' + error.message);
    }
  }

  async isAuthenticated() {
    try {
      const response = await fetch(this.authUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.loggedIn === true;
    } catch (error) {
      throw new Error('PHP IsAuthenticated check failed: ' + error.message);
    }
  }

  async getCurrentUser() {
    try {
      const response = await fetch(this.authUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.loggedIn === true ? data.user : null;
    } catch (error) {
      throw new Error('PHP GetCurrentUser failed: ' + error.message);
    }
  }

  async signup(nsuId, email, password) {
    try {
      const response = await fetch(this.signupUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nsu_id: nsuId,
          email: email,
          password: password
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.success) {
        return true;
      } else {
        throw new Error(data.error || 'Signup failed');
      }
    } catch (error) {
      throw new Error('PHP Signup failed: ' + error.message);
    }
  }
}

export default PhpAuthAdapter;