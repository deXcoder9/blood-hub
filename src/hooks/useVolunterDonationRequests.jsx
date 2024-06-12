import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios secure/useAxiosSecure";


const useVolunterDonationRequests = () => {

    const axiosSecure = useAxiosSecure()

    const { data:volunteerRequests=[] , refetch} = useQuery({
        queryKey: ['volunteerRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/volunteerDonationRequests')
            return res.data
        }
    })

    return [volunteerRequests, refetch]
};

export default useVolunterDonationRequests;