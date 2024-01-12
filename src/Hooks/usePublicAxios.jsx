import axios from 'axios';

const publicAxios = axios.create({
    baseURL : 'http://localhost:5022'
})


const usePublicAxios = () => {
  return publicAxios;
}

export default usePublicAxios