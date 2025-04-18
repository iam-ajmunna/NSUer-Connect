
// Jummas Proxy Design Pattern With Munnas Adapter Pattern Included
export default class AuthProxy {
  constructor() {
    this.users = [
      { nsu_id: '2211796', password: '1111', name: 'Assaduzzaman Munna', email: 'munna@nsu.edu' },
      { nsu_id: '2233550', password: '2222', name: 'Sarah Khan', email: 'sarah@nsu.edu' }
    ];
  }

  async login(username, password) {
    
    // Log attempt of Jummas Proxy
    console.log(`Proxy: Authentication attempt for user: ${username}`);

    // Validate inputs
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    const user = this.users.find(u => u.nsu_id === username && u.password === password);
    if (!user) {
        // 1. PHP
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

        // 2. Firebase
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

        throw new Error('Invalid credentials');
    }

    console.log(`Proxy: Successful login for user: ${username}`);
    return { success: true, user };
  }
}
