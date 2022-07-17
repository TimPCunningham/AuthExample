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
        console.log(idToken);
      }).catch(function(error) {
        console.log(error);
      });
      

    }).catch((error) => {
      console.log(`[Login Error][${error.code}]: ${error.message}`);
    });
}