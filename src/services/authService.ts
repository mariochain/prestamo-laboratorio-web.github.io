import axios from 'axios';

export const loginService = async (username: string, password: string) => {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
};
