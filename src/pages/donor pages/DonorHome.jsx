
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";
import useAuth from "../../hooks/use auth/useAuth";
import { useQuery } from "@tanstack/react-query";


const DonorHome = () => {
    const axiosSecure = useAxiosSecure()
    const {userInfo} = useAuth()
    const {data: recentReq=[]} = useQuery({
        queryKey:["requests", userInfo?.email] ,
        queryFn: async() =>{
            const res  = await axiosSecure.get(`/recentdonationrequests?email=${userInfo?.email}`)
            return res.data
        }
    })

    console.log(recentReq)

    return (
        <div>
                {/* <h1>Hii</h1> */}
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>recipientName</th>
        <th>Date/Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        recentReq.slice(0,3).map((recent, idx) => <tr key={idx}>
        <th>{idx+1}</th>
        <td>{recent.recipientName}</td>
        <td>
            {recent.donationTime}
            <br />
            {recent.donationDate}
        </td>
        <td>{recent.status}</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DonorHome;