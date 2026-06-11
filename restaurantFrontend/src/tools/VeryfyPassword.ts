import { Api } from "./Api";

export function Verify_Password(password: string, userName: string): boolean {
  const payload = {
    username: userName,
    Password: password,
  };
  console.log(payload);
  Api.post("/JWTGen", payload)
    .then((response) => {
      console.log("Token received:", response.data);
      localStorage.setItem("JWT", response.data);
      return true;
    })
    .catch((error) => {
      console.error("Authentication failed:", error);
      return false;
    });
  return true;
}
