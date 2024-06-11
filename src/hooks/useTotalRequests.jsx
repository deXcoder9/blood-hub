import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios secure/useAxiosSecure";

// const useTotalRequests = (selectedValue) => {

const useTotalRequests = (selectedValue) => {
    // console.log(userInfo)
    const axiosSecure = useAxiosSecure()
    const {refetch, data:totalRequests =[]} = useQuery({
        // queryKey: ['request', userInfo?.email, selectedValue],
        queryKey: ['request', selectedValue],
        queryFn: async () => {
        //    const res  = await axiosSecure.get(`/totaldonationrequest?sort=${selectedValue}`)
           const res  = await axiosSecure.get(`/totalrequesteddonations?sort=${selectedValue}`)
           return res.data
            // console.log(res.data)
        }
    })
    return [totalRequests, refetch]
};

export default useTotalRequests;