import axios from "axios";


const axiosClient = axios.create({  baseURL: "/api" });


axios.defaults.timeout = 3000;

axiosClient.interceptors.request.use(response=>{
    if (response && response.data) return response.data
    return response
  }, err => {
    if (!err.response) {
      return alert(err)
    }
    throw err.response
})

export default axiosClient;
