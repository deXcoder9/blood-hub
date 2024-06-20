import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://bloodhub-assignment-ten.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;