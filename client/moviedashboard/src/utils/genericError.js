import axios from "axios";
import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";

export const genericError = async (error, USERS_API_BASE_URL) => {
  if (error?.response?.status === 401) {
    try {
      const response = await axios(`${USERS_API_BASE_URL}/refreshToken`, {
        withCredentials: true,
      });

      localStorage.setItem("token", response.data.accessToken);
      window.location.reload();
    } catch {
      localStorage.clear();
      window.location.href = "/loginPage";
    }
  }
};
