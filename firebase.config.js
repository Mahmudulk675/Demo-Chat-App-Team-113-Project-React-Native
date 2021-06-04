import  firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// }

// const firebaseConfig = {
//   apiKey: "AIzaSyBMbnYhvGnnG9TNDgIdWInAlPkeIfYKNZU",
//   authDomain: "live-chat-react-native.firebaseapp.com",
//   projectId: "live-chat-react-native",
//   storageBucket: "live-chat-react-native.appspot.com",
//   messagingSenderId: "113585364315",
//   appId: "1:113585364315:web:6f987a6dbe2ba6d34dce7e",
// }

const firebaseConfig = {
  apiKey: "AIzaSyDJKaK0jYe2iHt2_fa0z8IROdG9N73Tz9k",
  authDomain: "auth-recap-6ba9a.firebaseapp.com",
  projectId: "auth-recap-6ba9a",
  storageBucket: "auth-recap-6ba9a.appspot.com",
  messagingSenderId: "908096573065",
  appId: "1:908096573065:web:bffc54dccfe3621ebe4058"
};

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
