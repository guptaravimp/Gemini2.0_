import { APIendpoints } from "../apis";
import apiConnector from "../apiConnector"
import { setToken, setUser } from "../../src/slices/authSlice";
import { useDispatch } from "react-redux";
const {GENERATE_CONTENT_API}=APIendpoints
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;


export const generateContent = async (content) => {
    // console.log("Content is", content);
    // console.log("API URL is", GENERATE_CONTENT_API);
    try {
        const response = await apiConnector("POST", GENERATE_CONTENT_API, {content});


        // Check for the correct response structure
        if (!response || !response.data) {
            throw new Error("API did not return valid data");
        }
        console.log("API RESPONSE IS", response?.data);
        return response.data;  // Return the actual response data
    } catch (error) {
        console.error("Error occurred:", error.message || error);
        return { error: error.message || "Something went wrong" };
    }
}

// const dispatch=useDispatch()
export const googleAuth=async(code,dispatch)=>{
    try{
        const response = await apiConnector("GET", BASE_URL+`/google?code=${code}`)
        console.log("response getting",response)
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));
        localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem("user",JSON.stringify(response.data.user))
        return response
    }catch(error){
        console.log("errro occured")
    }
}