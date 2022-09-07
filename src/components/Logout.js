import React from "react";
import { auth } from "../firebase";

const style = {
  signOutBtn: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

function Logout() {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className={style.signOutBtn}>
      Sign Out
    </button>
  );
}

export default Logout;
