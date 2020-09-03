import {request, response} from 'async-request'
import axios from 'axios'
import {JSDOM} from 'jsdom';

export default class Api {
    BASE_URL = "http://localhost:3003/api";

    async getData(limit, offset) {
        try {
            const response = await axios.post(`${this.BASE_URL}/app/getall`, {limit, offset});
            return response.data
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

    async updateStatus() {
        try {
            const response = await axios.get(`${this.BASE_URL}/app/getstatus`, {});
            return response.data.status
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

    async cleanTable() {
        try {
            await axios.delete(`${this.BASE_URL}/app/cleantable`);
            return
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

    async addNewLink(level, name, parent, url) {
        console.log(level, name, parent, url)
        try {
            await axios.post(`${this.BASE_URL}/app/addnewlink`, {level, name, parent, url});
            return
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

}


