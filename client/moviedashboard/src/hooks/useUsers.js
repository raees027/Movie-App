import { useRef } from "react";
import { getUserProfile } from "../api/userApi";
import { genericError } from "../utils/genericError";

export const useUsers = () => {
  const abortController = useRef(new AbortController());
  const fetchProfile = async () => {
    try {
      await getUserProfile(abortController.current.signal);
    } catch (error) {
      genericError(error);
      console.log(error?.response?.data?.message || error.message);
    }
  };
  return { fetchProfile, abortController };
};
