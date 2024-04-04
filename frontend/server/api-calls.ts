import axios from 'axios';

const url = 'http://127.0.0.1:5000';

export const getOutfit = async () => {
    try {
        const response = await axios.get(`${url}/outfit`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}