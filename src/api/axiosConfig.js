import axios from 'axios';

export default axios.create({
    baseURL:'https://2c4d6b77e14c.ngrok.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});