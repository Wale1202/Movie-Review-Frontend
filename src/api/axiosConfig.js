import axios from 'axios';

export default axios.create({
    baseURL:'https://api-movie-review.ngrok.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});