import { useState } from "react";
import useTotalRequests from "../../hooks/useTotalRequests";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";

const VolunterDonationReq = () => {
  const [selectedValue, setSelectedValue] = useState("default");
  const [totalRequests, refetch] = useTotalRequests(selectedValue);
  const [showAll, setShowAll] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleChange = (event) => {
    refetch();
    setSelectedValue(event.target.value);
    console.log(event.target.value);
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
    <div>
      <div className="mb-7">
        <select
          className="select select-primary w-full max-w-xs"
          value={selectedValue} // Bind the state to the value
          onChange={handleChange} // Bind the event handler to onChange
        >
          <option value="default">default</option>
          <option value="pending">pending</option>
          <option value="inProgress">inProgress</option>
          <option value="done">done</option>
          <option value="cancel">cancel</option>
        </select>
      </div>

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
            {showAll === false
              ? totalRequests.slice(0, 5).map((recent, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recent.recipientName}</td>
                    <td>
                      {recent.donationTime}
                      <br />
                      {recent.donationDate}
                    </td>
                    <td>
                      {recent.status}
                      {recent.status === "inProgress" && (
                        <div className="space-x-2 py-1">
                          <button
                            onClick={() => handleDone(recent)}
                            className="btn-xs bg-green-500"
                          >
                            done
                          </button>
                          <button
                            onClick={() => handleCancel(recent)}
                            className="btn-xs bg-red-600"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              : totalRequests.map((recent, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{recent.recipientName}</td>
                    <td>
                      {recent.donationTime}
                      <br />
                      {recent.donationDate}
                    </td>
                    <td>
                      {recent.status}
                      {recent.status === "inProgress" && (
                        <div className="space-x-2 py-1">
                          <button
                            onClick={() => handleDone(recent)}
                            className="btn-xs bg-green-500"
                          >
                            done
                          </button>
                          <button
                            onClick={() => handleCancel(recent)}
                            className="btn-xs bg-red-600"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className=" flex justify-center mt-7  ">
          {totalRequests.length > 5 && (
            <button
              className="btn  btn-primary  "
              onClick={() => setShowAll(!showAll)}
            >
              {!showAll ? "Show more" : "Show less"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunterDonationReq;
