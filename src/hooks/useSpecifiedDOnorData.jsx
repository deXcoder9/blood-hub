import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios secure/useAxiosSecure";
import useAuth from "./use auth/useAuth";


const useSpecifiedDOnorData = () => {
    const axiosSecure = useAxiosSecure()
    const {userInfo} = useAuth()
    const {data: recentReq=[]} = useQuery({
        queryKey:["requests", userInfo?.email] ,
        queryFn: async() =>{
            const res  = await axiosSecure.get(`/recentdonationrequests?email=${userInfo?.email}`)
            return res.data
        }
    })


    return [recentReq]
};

export default useSpecifiedDOnorData;