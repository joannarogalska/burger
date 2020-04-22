import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1bc8e.firebaseio.com/'
});

export default instance;
