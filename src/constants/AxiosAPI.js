import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:7000/",
    headers: {
        'Content-Type': 'multipart/form-data '
    },
    timeout: 1000 * 100
});