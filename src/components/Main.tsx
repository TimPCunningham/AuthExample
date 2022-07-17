import React from "react";
import { googleLogin } from "../global/auth.service";

const handleAuthApiTest = () => {
  fetch("/api/test", {
    method: "GET",
    headers: {
      "Authorization": "Basic " + (window.localStorage.getItem("test_auth_token") ?? "")
    }
  }).then(res => res.json()).then(json => console.log(json)).catch(err => console.error(err));
};

export const Main = (): JSX.Element => {
  return (<div>
    <div>Hello World!!</div>
    <button onClick={googleLogin}>Sign In</button>
    <button onClick={handleAuthApiTest}>Get Test</button>
  </div>);
};