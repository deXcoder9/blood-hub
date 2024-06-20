import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";
import Swal from "sweetalert2";
import useDonationReq from "../../hooks/useDonationReq";
import { Link } from "react-router-dom";
import {  useState } from "react";

const DonationRequests = () => {
  const axiosSecure = useAxiosSecure();
  const [showAll, setShowAll] = useState(false);
  const [selectedValue, setSelectedValue] = useState('default');
  const [requests, refetch] = useDonationReq(selectedValue);


  // useEffect( ()=>{
  //   axiosSecure(`/donationfiltering?sort=${selectedValue}`)
  //   .then(res => console.log(res))
  // } ,[selectedValue])

  const handleChange = (event) => {
    refetch()
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const showMore = () => {
    setShowAll(!showAll);
    // console.log(showAll);
  };

  const handleDelete = (requests) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
        });
      }
    });
  };

  const handleCancel = (req) => {
    axiosSecure.patch(`/donationCancel/${req._id}`).then((response) => {
      if (response.data.modifiedCount > 0) {
        refetch();
      }
    });
  };
  const handleDone = (req) => {
    axiosSecure.patch(`/donationDone/${req._id}`).then((response) => {
      if (response.data.modifiedCount > 0) {
        refetch();
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto mb-10  ">
      <div className="mb-7">
        <select
          className="select select-primary w-full max-w-xs"
          value={selectedValue} // Bind the state to the value
          onChange={handleChange} // Bind the event handler to onChange
        >
          <option  value="default">
            default
          </option>
          <option value="pending">pending</option>
          <option value="inProgress">inProgress</option>
          <option value="done">done</option>
          <option value="cancel">cancel</option>
        </select>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Information</th>
            <th>location</th>
            <th>Date/time</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {showAll === false
            ? requests.slice(0, 7).map((req, idx) => (
                <tr key={idx}>
                  <th> {idx + 1} </th>
                  <td>
                    {req.recipientName}
                    <br />

                    {req.status === "inProgress" && (
                      <span className="badge badge-ghost badge-sm">
                        {req.userEmail}
                      </span>
                    )}
                  </td>
                  <td>
                    <span>
                      {req.recipientUpazilla}, {req.recipientDistrict}
                    </span>
                  </td>
                  <td>
                    {req.donationTime}
                    <br />
                    <span>{req.donationDate}</span>
                  </td>
                  {req.status === "pending" && (
                    <td className="py-2">{req.status}</td>
                  )}
                  {req.status === "cancel" && <td>{req.status}</td>}
                  {req.status === "done" && <td>{req.status}</td>}
                  {req.status === "inProgress" && (
                    <td>
                      <p className="py-2">{req.status}</p>
                      <button
                        onClick={() => handleDone(req)}
                        className="btn btn-xs mr-2 bg-green-500"
                      >
                        Done
                      </button>
                      <button
                        onClick={() => handleCancel(req)}
                        className="btn btn-xs bg-red-500"
                      >
                        cancel
                      </button>
                    </td>
                  )}
                  {/* TODO: if inprogress show in <td> format  name & email  */}

                  <th>
                    <Link to={`/update-donation-request/${req._id}`}>
                      <button className="btn btn-ghost btn-xs bg-green-400 ">
                        edit
                      </button>
                    </Link>
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
                    <Link to={`/donation-request-details/${req._id}`}>
                      <button className="btn btn-ghost btn-xs bg-gray-400 ">
                        view
                      </button>
                    </Link>
                  </th>
                </tr>
              ))
            : requests.map((req, idx) => (
                <tr key={idx}>
                  <th> {idx + 1} </th>
                  <td>
                    {req.recipientName}
                    <br />

                    {req.status === "inProgress" && (
                      <span className="badge badge-ghost badge-sm">
                        {req.userEmail}
                      </span>
                    )}
                  </td>
                  <td>
                    <span>
                      {req.recipientUpazilla}, {req.recipientDistrict}
                    </span>
                  </td>
                  <td>
                    {req.donationTime}
                    <br />
                    <span>{req.donationDate}</span>
                  </td>
                  {req.status === "pending" && (
                    <td className="py-2">{req.status}</td>
                  )}
                  {req.status === "cancel" && <td>{req.status}</td>}
                  {req.status === "done" && <td>{req.status}</td>}
                  {req.status === "inProgress" && (
                    <td>
                      <p className="py-2">{req.status}</p>
                      <button
                        onClick={() => handleDone(req)}
                        className="btn btn-xs mr-2 bg-green-500"
                      >
                        Done
                      </button>
                      <button
                        onClick={() => handleCancel(req)}
                        className="btn btn-xs bg-red-500"
                      >
                        cancel
                      </button>
                    </td>
                  )}
                  {/* TODO: if inprogress show in <td> format  name & email  */}

                  <th>
                    <Link to={`/update-donation-request/${req._id}`}>
                      <button className="btn btn-ghost btn-xs bg-green-400 ">
                        edit
                      </button>
                    </Link>
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
                    <Link to={`/donation-request-details/${req._id}`}>
                      <button className="btn btn-ghost btn-xs bg-gray-400 ">
                        view
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
        </tbody>
      </table>
      <div className=" flex justify-center mt-7  ">
       {
        requests.length > 7 &&  <button className="btn  btn-primary  " onClick={showMore}>
        {!showAll ? "Show more" : "Show less"}
      </button>
       }
      </div>
    </div>
  );
};

export default DonationRequests;
