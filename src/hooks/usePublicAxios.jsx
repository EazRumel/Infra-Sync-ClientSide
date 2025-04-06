import axios from 'axios';


export const axiosSecurePublic = axios.create({
  baseURL:"http://localhost:3000"
})
const usePublicAxios = () => {
  return (
    axiosSecurePublic   
  );
};

export default usePublicAxios;