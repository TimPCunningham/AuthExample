import React from "react";
import { googleLogin } from "../global/auth.service";

export const Main = (): JSX.Element => {
  
  return (<div>
    <div>Hello World!!</div>
    <button onClick={googleLogin}>Sign In</button>
  </div>);
};