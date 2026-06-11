import React, { useEffect, useState } from "react";
import { Verify_Password } from "../../tools/VeryfyPassword";
//TODO add feedback if Wrong password got input
export function Login() {
  const [loginState, setLoginState] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [userName, setSetuserName] = useState<string>("");
  const handlePassword = (): any => {
    if (Verify_Password(password, userName)) {
      setLoginState(1);
    } else {
      setLoginState(3);
    }
  };
  if (loginState == 1) {
    return null;
  } else {
    return (
      <div className="loginBackground">
        <div className="loginBox ">
          <h1>login</h1>
          <input
            type="Username"
            id="username"
            className="field"
            value={userName}
            onChange={(e) => setSetuserName(e.target.value)}
          />
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
