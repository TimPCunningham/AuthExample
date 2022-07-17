import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function googleLogin(): void {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      auth.currentUser?.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        fetch("/api/authorize", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({token: idToken})
        }).then(res => res.json()).then(json => console.log("RESULT", json)).catch(err => console.error(err));
      }).catch(function(error) {
        console.log(error);
      });
    }).catch((error) => {
      console.log(`[Login Error][${error.code}]: ${error.message}`);
    });
}