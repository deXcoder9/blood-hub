import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/axios secure/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    console.log(users)
    return (
        <div>
            all users{users.length}
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
            <td>
              <button className="btn btn-ghost btn-xs">{user.status}</button>
            </td>
            <td>Volunteer</td>
            <td>Make Admin</td>
          </tr>)
      }
    </tbody>
    
  </table>
        </div>
    );
};

export default AllUsers;