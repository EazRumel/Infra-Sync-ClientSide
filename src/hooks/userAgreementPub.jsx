import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAgreementPub = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const {refetch,data:agreement = []} = useQuery({
    queryKey:["agreement",user?.email],
    queryFn:async()=>{
      const response = await axiosSecure.get("/agreement")
      return response.data
    }
  });
  return [agreement,refetch];
};

export default useAgreementPub;