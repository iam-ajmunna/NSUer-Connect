export default class AuthProxy {
  constructor() {
    this.users = [
      { nsu_id: '2211796', password: '1111', name: 'Assaduzzaman Munna', email: 'munna@nsu.edu' },
      { nsu_id: '2233550', password: '2222', name: 'Sarah Khan', email: 'sarah@nsu.edu' }
    ];
  }

  async login(username, password) {
    // Log attempt
    console.log(`Proxy: Authentication attempt for user: ${username}`);

    // Validate inputs
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    // Access hardcoded data
    const user = this.users.find(u => u.nsu_id === username && u.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    console.log(`Proxy: Successful login for user: ${username}`);
    return { success: true, user };
  }
}