class AuthInterface {
  async login(username, password) {
    throw new Error("Method 'login' must be implemented.");
  }

  async logout() {
    throw new Error("Method 'logout' must be implemented.");
  }

  async isAuthenticated() {
    throw new Error("Method 'isAuthenticated' must be implemented.");
  }

  async getCurrentUser() {
    throw new Error("Method 'getCurrentUser' must be implemented.");
  }
}

export default AuthInterface;