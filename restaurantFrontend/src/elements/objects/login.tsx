import React, { useEffect, useState } from "react";

export function Login() {
  const [loginState, setLoginState] = useState<number>();
  const handlePassword = (): any => {
    //make bakend send a password for verification
    setLoginState(1);
  };
  if (loginState == 1) {
    return null;
  } else {
    return (
      <div className="loginBackground">
        <div className="loginBox">
          <h1>login</h1>
          <input type="password" id="password" className="loginPassword" />
          <input
            type="submit"
            id="login"
            value="login"
            className="loginButton"
            onClick={handlePassword}
          />
        </div>
      </div>
    );
  }
}
