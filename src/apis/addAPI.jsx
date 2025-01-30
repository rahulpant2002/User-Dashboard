import axios from "axios";
import { API_URL } from "../utils/constant";

export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (err) {
    console.error("Error adding user:", err);
  }
};
