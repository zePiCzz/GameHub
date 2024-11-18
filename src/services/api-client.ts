import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fc8d78676e3f453a96e02881a0058827'
    }
});