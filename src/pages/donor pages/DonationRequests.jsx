import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";
import Swal from "sweetalert2";

const DonationRequests = () => {
  const axiosSecure = useAxiosSecure();

  const { data: requests = [], refetch } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donationrequests");
      return res.data;
    },
  });

  const handleDelete = (requests) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/donationrequests/${requests._id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              })
        }
      });
  };

  console.log(requests);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name/location</th>
            <th>Date/time</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {requests.map((req, idx) => (
            <tr key={idx}>
              <th> {idx + 1} </th>
              <td>
                {req.recipientName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {req.recipientUpazilla}, {req.recipientDistrict}{" "}
                </span>
              </td>
              <td>
                {req.donationTime}
                <br />
                <span>{req.donationDate}</span>
              </td>
              <td>{req.status}</td>
              {/* TODO: if inprogress show in <td> format  name & email  */}

              <th>
                <button className="btn btn-ghost btn-xs bg-green-400 ">
                  edit
                </button>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(req)}
                  className="btn btn-ghost btn-xs bg-red-500 "
                >
                  delete
                </button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs bg-gray-400 ">
                  view
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationRequests;
