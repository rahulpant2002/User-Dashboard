import axios from "axios";
import { API_URL } from "../utils/constant";

export const getUsers = async()=>{
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } 
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};