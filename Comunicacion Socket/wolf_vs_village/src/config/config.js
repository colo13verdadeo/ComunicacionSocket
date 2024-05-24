import axios from "axios";

const URL = `http://${window.location.hostname}:3000`;

// TODO: aquí hay que especificar bien los endpoints
export const endpoints = {
    Login: "",
    Register: ""
};

export const Axios = axios.create({
    baseURL: URL,
    timeout: 1000
});