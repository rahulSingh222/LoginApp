import { toast } from "react-toastify";
import axios from "axios";

const URL = "http://localhost:5000/";

export const registerUser = async (setIsLoading, values) => {
    const { name, email, password } = values;
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${URL}signup`,
        {
          email,
          password,
          name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log(response);
      toast.success("Registered successfully...");
      setIsLoading(false);
    } catch (error) {
      const message = error.response.data;
      if (error.response.status === 400) {
        toast.error(message);
        setIsLoading(false);
      }
    }
  };

 export const loginUser = async (setIsLoading, values) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${URL}login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data[0]);
      //toast success
      toast.success("Login successfully...");
      setIsLoading(false);
    } catch (error) {
      const message = error.response.data;
      if (error.response.status === 400) {
        toast.error(message);
        setIsLoading(false);
      }
    }
  };