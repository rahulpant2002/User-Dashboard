import axios from "axios";
import { API_URL } from "../utils/constant";
export const editUser = async(id, userData)=>{
    try{
        const response = await axios.put(`${API_URL}/${id}`, userData);
        return response.data;
    }
    catch(err){
        console.error("Error updating user:", err);
    }
}