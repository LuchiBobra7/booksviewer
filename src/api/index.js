import axios from 'axios';

export const API_URL = "https://www.googleapis.com/books/v1/volumes";
export const DEFAULT_IMG = "/img/no_img.png"

export const getBooks = (q) => {
    const params = {
        q
    };
    return axios.get(`${API_URL}/`, { params });
}

export const getBook = (id) => {
    return axios.get(`${API_URL}/${id}`);
}