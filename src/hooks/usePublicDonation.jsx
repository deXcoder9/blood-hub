import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axios public/useAxiosPublic";

const usePublicDonation = () => {
  const axiosPublic = useAxiosPublic();

  const { data: publicDonations = [] } = useQuery({
    queryKey: ["publicDonations"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publicdonations");
      return res.data;
    },
  });

  return [publicDonations];
};

export default usePublicDonation;
