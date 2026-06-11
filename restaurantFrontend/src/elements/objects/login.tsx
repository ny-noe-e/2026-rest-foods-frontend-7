import React, { useState } from "react";
import { Verify_Password } from "../../tools/VeryfyPassword";

export function Login() {
  const [password, setPassword] = useState<string>("");
  const [userName, setSetuserName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("login") == "true",
  );
  if (isLoggedIn == false) {
    localStorage.removeItem("JWT");
    localStorage.setItem("login", "false");
  }
  const handlePassword = (): any => {
    if (Verify_Password(password, userName)) {
      setIsLoggedIn(true);
      localStorage.setItem("login", "true");
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem("JWT");
      localStorage.setItem("login", "false");
      alert("invalide password / username");
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
