import axios from 'axios';
import { isAuthenticate } from "../utils/localStorage";
const instance = axios.create({
    baseURL : 'http://localhost:8001/api'
})
export default instance

