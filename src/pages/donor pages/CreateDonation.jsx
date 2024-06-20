import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";
import useAuth from "../../hooks/use auth/useAuth";
import Swal from "sweetalert2";
import useUserdata from "../../hooks/use user data/useUserdata";

const CreateDonation = () => {
const {userInfo} = useAuth()
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit } = useForm();
  const [userDetails] = useUserdata()
  // console.log(userDetails)


  let serialNO = 0
  const onSubmit = (data) => {
    const formData  = {
      ...data,
      serialNo: `${serialNO + 1}`,
      status: "pending",
      userName: `${userInfo.displayName}`,
      userEmail: `${userInfo.email}`
    }
    serialNO += 1
   axiosSecure.post('/donationrequests', formData )
   .then(() =>{
    // refetch()
     Swal.fire({
       title: "Donation Requested",
       text: "Your donation request has been sent successfully",
       icon: "success",
       confirmButtonText: "Ok",
     })
     setTimeout(function(){
      window.location.reload()
     }, 1400)
   })
    // console.log(formData);
  };
  
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  ml-20 space-y-1"
      >
        <h6 className="text-sm">Name:</h6>
        <input
          className="bg-gray-400 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="text"
          defaultValue={userInfo?.displayName}
          disabled
        />
        <h6 className="text-sm">Email:</h6>
        <input
          className="bg-gray-400 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="text"
          defaultValue={userInfo?.email}
          disabled
        />
        <h6 className="text-sm">Recipient Name:</h6>
        <input
          className="bg-gray-300 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="text"
          {...register("recipientName")}
          placeholder="recipient name"
        />
        <h6 className="text-sm">Recipient District:</h6>
        <select
          {...register("recipientDistrict")}
          className="py-2 border-[1px] border-black rounded-[3px] "
        >
          <option value="Khulna">Khulna</option>
          <option value="Magura">Dhaka</option>
        </select>
        <h6 className="text-sm">Recipient Upazilla:</h6>
        <select
          {...register("recipientUpazilla")}
          className="py-2 border-[1px] border-black rounded-[3px] "
        >
          <option value="female">Savar</option>
          <option value="male">Dohar</option>
        </select>
        <h6 className="text-sm">Hospital:</h6>
        <input
          className="bg-gray-300 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="text"
          {...register("hospital")}
          placeholder="hospital"
        />
        <h6 className="text-sm">Full Address:</h6>
        <input
          className="bg-gray-300 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="text"
          {...register("address")}
          placeholder="full address"
        />
        <h6 className="text-sm">Donation Date:</h6>
        <input
          className="bg-gray-300 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="date"
          {...register("donationDate")}
          placeholder="Donation date"
        />
        <h6 className="text-sm">Donation Time:</h6>
        <input
          className="bg-gray-300 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="time"
          {...register("donationTime")}
          placeholder="donation time"
        />
        <h6 className="text-sm">Message:</h6>
        <input
          className="bg-gray-300 border-[1px] border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
          required
          type="text"
          {...register("message")}
          placeholder="message"
        />
       {
        userDetails.status === "active" ?
        <input
        className="bg-gray-300 border-[1px] bg-green-500 border-black rounded-[3px] py-2 text-sm pl-3 pr-11"
        required
        type="submit"
      />
      :
      <button disabled className="btn ">Submit</button>
       }
      </form>
    </div>
  );
};

export default CreateDonation;
