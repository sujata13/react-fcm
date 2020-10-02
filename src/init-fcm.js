import * as firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyD2MH-cx9GMRoJ_M7fHxPPueTJBvKYoAAk",
  authDomain: "push-notification-demo-f93ec.firebaseapp.com",
  databaseURL: "https://push-notification-demo-f93ec.firebaseio.com",
  projectId: "push-notification-demo-f93ec",
  storageBucket: "push-notification-demo-f93ec.appspot.com",
  messagingSenderId: "752278633076",
  appId: "1:752278633076:web:036cca618a30fd5fd36f21",
  measurementId: "G-QF4S0XMG33"
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BEz3gZk5835_7KQRC8wxu0FibbdmYUSbZVFfVfRq3pJylj9OcWDB0MZSXKEAm9W6tcio66LpmuZNg3SvmQIvVhg"
);

export { messaging };
