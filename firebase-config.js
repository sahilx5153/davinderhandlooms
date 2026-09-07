// ─────────────────────────────────────────────────────────────
// FIREBASE CONFIG — replace the values below with your own
// (Firebase Console → Project settings → General → Your apps → SDK setup)
// This same file is used by both index.html and admin.html.
// ─────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBa4Yj4q-R1gQ2uOBIut7Z0orAsWF_D9-U",
  authDomain: "davinder-handlooms.firebaseapp.com",
  projectId: "davinder-handlooms",
  storageBucket: "davinder-handlooms.firebasestorage.app",
  messagingSenderId: "602482615953",
  appId: "1:602482615953:web:c6f32f2f45b70198fd0130"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
