const firebaseConfig = {
  apiKey: "AIzaSyAgKkeceVvlBUVYSm-Ju8kPtiAfNbGn9tw",
  authDomain: "gymyg-staging.firebaseapp.com",
  projectId: "gymyg-staging",
  storageBucket: "gymyg-staging.appspot.com",
  messagingSenderId: "616518155239",
  appId: "1:616518155239:web:98add7b2f3df6af9d01b42",
  measurementId: "G-ZMCKBMWYDN",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
