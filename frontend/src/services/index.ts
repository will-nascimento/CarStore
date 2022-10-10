import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: {
        // Accept: 'application/json'
        'content-type':'application/json'
    }
    }
  );

// api.interceptors.request.use(config => {
//     config.headers = {
//         Accept: 'application/json'
//     }
//     return config;
// });

export default api