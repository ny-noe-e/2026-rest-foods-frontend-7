import React, { useEffect, useState } from "react";
import { Verify_Password } from "../../tools/VeryfyPassword";

export function Login() {
  const [loginState, setLoginState] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const handlePassword = (): any => {
    if (Verify_Password(password)) setLoginState(1);
  };
  if (loginState == 1) {
    return null;
  } else {
    return (
      <div className="loginBackground">
        <div className="loginBox">
          <h1>login</h1>
          <input
            type="password"
            id="password"
            className="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
