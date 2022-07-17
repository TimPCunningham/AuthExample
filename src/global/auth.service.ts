import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function googleLogin(): void {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      auth.currentUser?.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        console.log(idToken);
        fetch("/auth/validate", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({token: idToken})
        }).then(res => res.json()).then(json => {
          if(json.token) {
            window.localStorage.setItem("test_auth_token", json.token);
          } else if(json.error) {
            console.error(json.error);
          }
        }).catch(err => console.error(err));
      }).catch(function(error) {
        console.log(error);
      });
    }).catch((error) => {
      console.log(`[Login Error][${error.code}]: ${error.message}`);
    });
}