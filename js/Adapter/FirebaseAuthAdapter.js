import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

class FirebaseAuthAdapter {
  constructor(firebaseConfig) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  async login(username, password) {
    try {
      await signInWithEmailAndPassword(this.auth, username, password);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  async isAuthenticated() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, (error)=>{
          reject(error);
        });
    });
  }

  async getCurrentUser() {
      return new Promise((resolve, reject) => {
          onAuthStateChanged(this.auth, (user) => {
              if (user) {
                  resolve(user);
              } else {
                  resolve(null);
              }
          }, (error) =>{
            reject(error);
          });
      });
  }
}

export default FirebaseAuthAdapter;