class AuthInterface {
  /**
   * Authenticates a user.
   * @param {string} username - The user's username.
   * @param {string} password - The user's password.
   * @returns {Promise<boolean>} A promise that resolves to true if authentication is successful, false otherwise.
   */
  async login(username, password) {
    throw new Error("Method 'login' must be implemented.");
  }

  /**
   * Logs out the current user.
   * @returns {Promise<void>} A promise that resolves when the user is logged out.
   */
  async logout() {
    throw new Error("Method 'logout' must be implemented.");
  }

  /**
   * Checks if a user is currently authenticated.
   * @returns {Promise<boolean>} A promise that resolves to true if the user is authenticated, false otherwise.
   */
  async isAuthenticated() {
    throw new Error("Method 'isAuthenticated' must be implemented.");
  }

  /**
   * Gets the currently authenticated user.
   * @returns {Promise<object|null>} A promise that resolves to the user object if authenticated, null otherwise.
   */
  async getCurrentUser() {
    throw new Error("Method 'getCurrentUser' must be implemented.");
  }

   /**
   * Signs up a new user.
   * @param {string} username - The user's username (NSU ID).
   * @param {string} password - The user's password.
   * @param {object} otherFields - Other fields to be stored.
   * @returns {Promise<boolean>} A promise that resolves to true if signup is successful, false otherwise.
   */
  async signup(username, password, otherFields){
    throw new Error("Method 'signup' must be implemented.");
  }
}

export default AuthInterface;