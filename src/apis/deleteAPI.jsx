import axios from "axios";
import { API_URL } from "../utils/constant";

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  }
  catch (err) {
    console.error("Error deleting user:", err);
    return false;
  }
};
