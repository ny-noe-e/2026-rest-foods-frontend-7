import React, { useEffect, useState } from "react";
import { Verify_Password } from "../../tools/VeryfyPassword";
//TODO add feedback if Wrong password got input
export function Login() {
  const [password, setPassword] = useState<string>("");
  const [userName, setSetuserName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("login") === "true";
  });
  const handlePassword = (): any => {
    if (Verify_Password(password, userName)) {
      setIsLoggedIn(true);
      localStorage.setItem("login", "true");
    } else {
      setIsLoggedIn(false);
      localStorage.setItem("login", "false");
    }
  };
  if (isLoggedIn) {
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
