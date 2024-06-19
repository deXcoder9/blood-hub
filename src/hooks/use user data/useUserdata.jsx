import { useQuery } from "@tanstack/react-query";
import useAuth from "../use auth/useAuth";
import useAxiosSecure from "../axios secure/useAxiosSecure";

const useUserdata = () => {
  const { userInfo } = useAuth();
  const axiosSecure = useAxiosSecure();
//   console.log(userInfo?.email)
  const { data: userDetails = {} , refetch } = useQuery({
    queryKey: ["users", userInfo?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/loggedinuser?email=${userInfo?.email}`
      );
      return res.data;
    // console.log(res.data)
    },
  });

  return [ userDetails, refetch ];
};

export default useUserdata;
