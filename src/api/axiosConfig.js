import axios from 'axios';

export default axios.create({
    baseURL:'https://d5f5-89-101-97-156.ngrok-free.app/',
    headers:{"ngrok-skip-browser-warning": "true"}
});