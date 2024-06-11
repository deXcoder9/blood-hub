

import useSpecifiedDOnorData from "../../hooks/useSpecifiedDOnorData";


const DonorHome = () => {
    

  const [recentReq] = useSpecifiedDOnorData()



    return (
        <div>
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
        <td>{recent.status} , {recent.userEmail}</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DonorHome;