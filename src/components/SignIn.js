import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
const style = {
  wrapper: `flex justify-center`,
};

const googleSign = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
function SignIn() {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSign} />
    </div>
  );
}
export default SignIn;
