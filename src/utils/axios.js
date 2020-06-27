import axios from 'axios';

const instance = axios.create({
    baseURL: "http://ebeta-admin.in:8080/api"
});

export default instance;
