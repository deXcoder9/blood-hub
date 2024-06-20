import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bloodhub-assignment-ten.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;