import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3333/",
});

api.interceptors.request.use(config => {
    config.headers = {
        Accept: 'application/json'
    }
    return config;
});

export default api

// export default {
//     getCars:async ()=>{
//         const result = await fetch(`${baseUrl}`);
//         const json = await result.json();
//         return json;
//     }
// }
