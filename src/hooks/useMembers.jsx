import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useMembers = () => {
 const {user} = useAuth()
 const axiosSecure = useAxiosSecure()
 const {data:isMember} = useQuery({
  queryKey:[user?.email,"isMember"],
  queryFn: async()=> 
    {
      const res = await 
      axiosSecure.get(`/users/member/${user.email}`)
      return res.data?.member
    }
 })
 return [isMember]
};

export default useMembers;