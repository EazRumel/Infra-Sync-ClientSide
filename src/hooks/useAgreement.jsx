import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAgreement = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const {refetch,data:agreement = []} = useQuery({
    queryKey:["agreement",user?.email],
    queryFn:async()=>{
      const response = await axiosSecure.get(`/agreement?email=${user?.email}`)
      return response.data
    }
  });
  return [agreement,refetch];
};

export default useAgreement;