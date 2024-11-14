import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fc8d78676e3f453a96e02881a0058827'
    }
});