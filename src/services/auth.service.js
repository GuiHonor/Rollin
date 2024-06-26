import axios from 'axios';

export const setLoggedUser = (data) => {
    let parsedData = JSON.stringify(data);
    localStorage.setItem('user', parsedData);
};

export const getLoggedUser = () => {
    let data = localStorage.getItem('user');
    if (!data) return null;
    try {
        let parsedData = JSON.parse(data);
        return parsedData;
    } catch (error) {
        console.log(error);
        return null;
    }
};
