import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
      axiosSecure.patch(`/users/makeadmin/${user._id}`)
      .then(res => {
        console.log(res.data)
        refetch()
      })
    } 
    const handleMakeVolunteer = user => {
      axiosSecure.patch(`/users/makevolunteer/${user._id}`)
      .then(res => {
        console.log(res.data)
        refetch()
      })
    } 
    const handleBlockUser = user =>{
      axiosSecure.patch(`/users/block/${user._id}`)
     .then(res => {
      console.log(res.data)
      refetch()
     })
    }
    const handleUnBlockUser = user =>{
      axiosSecure.patch(`/users/unblock/${user._id}`)
     .then(res => {
      console.log(res.data)
      refetch()
     })
    }



    // console.log(users)
    return (
        <div>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name/email</th>
        <th>Role</th>
        <th>Status</th>
        <th>
            {/* TODO: if block show unblock  & if unblock show block functional  */}
        </th>
        <th>
            {/* TODO: make Donor to volunteer  */}
        </th>
        <th>
             {/* TODO: make admin */}
        </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map( (user, idx) => <tr key={user._id}>
            <th>
                {idx+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.photourl} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm opacity-50">{user.email}</div>
                </div>
              </div>
            </td>
            <td>
              {user.role}
              <br/>
            </td>
            <td> {user.status} </td>
            {
              user?.status === "active" ? <td>
              <button onClick={() => handleBlockUser(user)} className="btn btn-ghost btn-xs bg-red-600">Block</button>
            </td>
            :
            <td>
              <button onClick={() => handleUnBlockUser(user)} className="btn btn-ghost btn-xs bg-green-600">Unblock</button>
            </td>
            }
            {
                user.role === "volunteer" ? 
                <td>
            </td>
            :
            <button onClick={() =>handleMakeVolunteer(user)} className="btn">Make Volunteer</button>
              }
              {
                user.role === "admin" ? 
                <td>
            </td>
            :
            <button onClick={() =>handleMakeAdmin(user)} className="btn">Make Admin</button>
              }
            
          </tr>)
      }
    </tbody>
    
  </table>
        </div>
    );
};

export default AllUsers;