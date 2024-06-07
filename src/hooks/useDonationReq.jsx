import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios secure/useAxiosSecure";
import useAuth from "./use auth/useAuth";


const useDonationReq = () => {
    const {userInfo} = useAuth()
    console.log(userInfo)
    const axiosSecure = useAxiosSecure()
    const {refetch, data:requests =[]} = useQuery({
        queryKey: ['request', userInfo?.email],
        queryFn: async () => {
           const res  = await axiosSecure.get(`/donationrequestbyemail/?email=${userInfo?.email}`)
           return res.data
        }
    })
    return [requests, refetch]
};

export default useDonationReq;