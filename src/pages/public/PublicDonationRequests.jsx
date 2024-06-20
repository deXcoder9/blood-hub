import { Link } from "react-router-dom";
import usePublicDonation from "../../hooks/usePublicDonation";

const PublicDonationRequests = () => {
  const [publicDonations] = usePublicDonation();

  return (
    <div className="max-w-[1300px] min-h-screen mx-auto">
      <div className="overflow-x-auto mt-16">
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
            {publicDonations.map((recent, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{recent.recipientName}</td>
                <td>
                  {recent.donationTime}
                  <br />
                </td>
                <td>{recent.status}</td>
                <td>
                 <Link to={`/donation-request-details/${recent._id}`}>
                 <button className="btn btn-primary btn-sm">View</button>
                 </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicDonationRequests;
