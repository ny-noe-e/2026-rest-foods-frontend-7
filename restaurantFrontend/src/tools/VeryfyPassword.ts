import { Api } from "./Api";

export async function Verify_Password(
  password: string,
  userName: string,
): Promise<boolean> {
  const payload = {
    username: userName,
    Password: password,
  };
  console.log(payload);
  try {
    const response = await Api.post("/JWTGen", payload);

    console.log("Token received:", response.data);
    localStorage.setItem("JWT", response.data);
    return true;
  } catch (error) {
    console.error("Authentication failed:", error);
    return false;
  }
}
