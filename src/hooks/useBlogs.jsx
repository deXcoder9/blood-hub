import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axios secure/useAxiosSecure";


const useBlogs = (selectedValue) => {
    const axiosSecure = useAxiosSecure()
    const {data:blogs=[] , refetch} = useQuery({
        queryKey: ['blogs', selectedValue],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/sortedblogs?sort=${selectedValue}`)
            return res.data
        }})

    return [ blogs, refetch] 
};

export default useBlogs;