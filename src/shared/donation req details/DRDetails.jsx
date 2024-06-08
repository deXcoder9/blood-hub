import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const DRDetails = () => {
    const [data , setData] = useState([])
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {id} = useParams()
    // console.log(id)
    
    
    
   useEffect(() =>{
    axiosSecure.get(`donationdetails/${id}`)
    .then(response =>{
        // console.log(response.data)
        // datas = response?.data
        setData(response?.data)
    })
   } ,[])
   console.log(data)

   const handleDonateBtn = () =>{
    Swal.fire({
        // title: "Are you sure?",
        title: `Donor Name: ${data.userName}  ` ,
        text: `Donor Email: ${data.userEmail}` ,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Donate it!"
      }).then((result) => {
        if (result.isConfirmed) {

                axiosSecure.patch(`changetoinprogress/${data._id}`)
                .then(res =>{
                    console.log(res.data)
                    
                    if(res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Deleted!", 
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          navigate("/dashboard/my-donation-requests")

                    }
        })

        }
      });
   }

    return (
        <div className="grid place-items-center mx-auto p-11 mt-20 card  outline" >
           <ul className="" >
            <li>User Email: {data.userEmail}</li>
            <li>User Name: {data.userName}</li>
            <li>Recipient Name: {data.recipientName}</li>
            <li>Recipient District: {data.recipientDistrict}</li>
            <li>Recipient Upazilla: {data.recipientUpazilla}</li>
            <li>Full Address: {data.address}</li>
            <li>Hospital: {data.hospital}</li>
            <li>Status: {data.status}</li>
            <li>Donation Time: {data.donationTime}</li>
            <li>Donation Date: {data.donationDate}</li>
           </ul>
           <button onClick={handleDonateBtn}  className="btn btn-outline btn-primary mt-6">Donate</button>
            <Link to="/dashboard/my-donation-requests">
           <button className="btn btn-primary mt-4 capitalize">  go back</button>
           </Link>
        </div>
    );
};

export default DRDetails;