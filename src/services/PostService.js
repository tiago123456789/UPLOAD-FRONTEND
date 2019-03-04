import axios from "axios";
import { BASE_URL } from "../config/App";

export default class PostService {

    upload(data, callback) {
        return axios.post(`${BASE_URL}posts`, data, {
            onUploadProgress: callback
        }).then(this._extractResponse);
    }

    findAll() {
        return axios.get(`${BASE_URL}posts`).then(this._extractResponse);
    }

    remover(id) {
        return axios.delete(`${BASE_URL}posts/${id}`);
    }

    _extractResponse(response) {
        return response.data;
    }
}