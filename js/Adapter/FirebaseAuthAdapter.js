import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "firebase/auth";
import AuthInterface from "./AuthInterface.js";

class FirebaseAuthAdapter extends AuthInterface {
  constructor(firebaseConfig) {
    super();
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  async login(email, password) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (error) {
      throw new Error('Firebase login failed: ' + error.message);
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
        unsubscribe();
        resolve(!!user);
      });
    });
  }

  async getCurrentUser() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        unsubscribe();
        resolve(user ? {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified
        } : null);
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