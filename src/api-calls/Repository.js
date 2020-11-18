import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080';
const base_url = "http://localhost:8080";
export default axios.create(base_url);