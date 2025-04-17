import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import AuthInterface from "./AuthInterface.js";

class FirebaseAuthAdapter extends AuthInterface {
  constructor(firebaseConfig) {
    super();
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  async login(email, password) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (error) {
      throw new Error('Firebase Login failed: ' + error.message);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw new Error('Firebase Logout failed: ' + error.message);
    }
  }

  async isAuthenticated() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        unsubscribe(); // Unsubscribe immediately to only check once
        resolve(!!user);
      });
    });
  }

  async getCurrentUser() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        unsubscribe(); // Unsubscribe immediately to only check once
        resolve(user || null);
      });
    });
  }

  async signup(email, password) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (error) {
      throw new Error('Firebase Signup failed: ' + error.message);
    }
  }
}
export default FirebaseAuthAdapter;