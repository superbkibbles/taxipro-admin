import jwtDecode from "jwt-decode";
import { User, Users } from "@/types";
import { BASE_API_URL, defaultPhoneCode } from "@/constants";

export const getAccessToken = () => {
  try {
    const auth = JSON.parse(
      localStorage.getItem("auth") as string
    ) as Users.UserControllerLoginCreatorAndUser.ResponseBody;
    return auth.accessToken;
  } catch (err) {
    return "";
  }
};

export const getRefreshToken = () => {
  try {
    const auth = JSON.parse(
      localStorage.getItem("auth") as string
    ) as Users.UserControllerLoginCreatorAndUser.ResponseBody;
    return auth.refreshToken;
  } catch (err) {
    return "";
  }
};

export const setCredentials = (
  credentials: Users.UserControllerLoginCreatorAndUser.ResponseBody
) => {
  localStorage.setItem("auth", JSON.stringify(credentials));
};

export const getLocalCompany = () => {
  try {
    return JSON.parse(localStorage.getItem("company") || "{}");
  } catch (err) {
    console.log("error", err);
  }
};

export interface DecodedTokenType {
  exp: number;
  name: string;
  email: string;
  role: string;
  id: string;
}

export const isValidToken = () => {
  try {
    if (typeof window !== "undefined") {
      const now = Date.now().valueOf() / 1000;
      const token = getAccessToken();
      if (!token) throw new Error("token not found");
      const decoded = jwtDecode(token) as DecodedTokenType;
      if (!decoded.exp) throw new Error("exp not found");
      if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
        throw new Error(`token expired: ${JSON.stringify(decoded)}`);
      }
      return decoded;
    }
  } catch (err) {
    return null;
  }
};

export const getUserInfo = () => isValidToken();

export const refreshToken = async () => {
  try {
    const body = await fetch(`${BASE_API_URL}/refresh`, {
      method: "POST",
      body: JSON.stringify({ refreshToken: getRefreshToken() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (body.status === 401) {
      window.location.href = `/login?next=${window.location.pathname}`;
      return;
    }
    const data = await body.json();
    localStorage.setItem("auth", data.accessToken);
  } catch (err) {}
};

export const revokeToken = async () => {
  try {
    const body = await fetch(`${BASE_API_URL}/revoke`, {
      method: "POST",
      body: JSON.stringify({ refreshToken: getRefreshToken() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await body.json();
    localStorage.clear();
  } catch (err) {}
};

export const isLoggedIn = () => {
  if (isValidToken()) {
    return true;
  }
  return false;
};

export const verifyEmailToken = async (token: string) => {
  const body = await fetch(`${BASE_API_URL}/users/verify/email/token/${token}`);
  const data = await body.json();
  return data;
};

export const getUserName = (user?: User) => {
  return (
    (user?.firstName &&
      user.lastName &&
      `${user?.firstName} ${user?.lastName}`) ||
    user?.name ||
    user?.email
  );
};
