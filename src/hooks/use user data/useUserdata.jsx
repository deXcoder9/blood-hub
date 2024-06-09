import { useQuery } from '@tanstack/react-query';
import useAuth from '../use auth/useAuth';
import useAxiosSecure from '../axios secure/useAxiosSecure';

const useUserdata = () => {
    const {userInfo} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: userData , refetch} = useQuery({
        queryKey: ['user', userInfo?.email],
        queryFn: async () => {
           const res  = await axiosSecure.get(`/loggedinusers/?email=${userInfo?.email}`)
           return res.data
        }
    })

    return {userData, refetch}
};

export default useUserdata;