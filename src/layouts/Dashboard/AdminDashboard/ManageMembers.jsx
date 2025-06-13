import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdManageAccounts, MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";


const ManageMembers = () => {
  const axiosSecure = useAxiosSecure()
  const { data: users = [""], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users")
      return response.data
    }
  })
  const handleRemove = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
            .then((result) => {
              if (result.data.deletedCount > 0) {
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            })
        }
      });
  }
  //   const handleUpdate = (user) => {
  //     axiosSecure.patch(`/users/member/${user._id}`)

  //     .then(response=>{
  //       console.log(response.data)
  //       if(response.data.modifiedCount > 0){
  //         refetch()
  //       Swal.fire({
  //   title: `${user.userName} is now a member`,
  //   icon: "success",
  //   draggable: true
  // });
  //     }
  //     })

  //   }
  return (
    <div >
      <h2 className="text-3xl text-teal-500 text-center">Manage Members</h2>
      <hr className="text-teal-500" />
      <div className="text-teal-500 text-center flex justify-center items-center mx-96 my-5">
      </div>
      <div className="overflow-x-auto w-full mx-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>Email</th>
              {/* <th>Update</th> */}
              <th>Remove</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map(user => {
                return (
                    <tr key={user._id}>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    {/* <td>
               {
                 user.role==="member" ? <p className="text-teal-400 font-light text-l">Member</p> :  <button onClick={()=>handleUpdate(user)} className="btn ml-10 bg-blue-800 text-white"><MdManageAccounts /></button>
               }
              </td> */}
                    <td>
                      <button onClick={() => handleRemove(user)} className="btn bg-red-500 text-white"><MdOutlineDelete /></button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;