class PhpAuthAdapter {
  constructor(authUrl = "php/auth.php") {
    this.authUrl = authUrl;
  }

  async login(username, password) {
    try {
      const response = await fetch(this.authUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.success) {
        return true;
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  }

  async isAuthenticated() {
    try {
      const response = await fetch(this.authUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.loggedIn) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error("Authentication check failed: " + error.message);
    }
  }

  async getCurrentUser() {
    try {
      const response = await fetch(this.authUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.loggedIn) {
        return data.user;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Get current user failed: " + error.message);
    }
  }

  async logout() {
    try {
      const response = await fetch(this.authUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ logout: true }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return true;
    } catch (error) {
      throw new Error("Logout failed: " + error.message);
    }
  }
}