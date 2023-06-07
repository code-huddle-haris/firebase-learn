import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

import "./App.css";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BN9u9j6dLIbMgNXh1lNR12st4_1GCwrR2Hbshrsbu4Q_jWa_oZMkok-hY9zJvPaUI-I4SVp9ukWO5MWNG9KbgoQ",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
