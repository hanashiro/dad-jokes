import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API;

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        Accept: 'application/json',
    },
});
