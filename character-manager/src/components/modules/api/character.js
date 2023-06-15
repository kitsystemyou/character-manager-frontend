import axios from "axios"

const ENDPOINT = "http://localhost:3001/"


const characterAPI = {
    async getAll(id) {
        const result = await axios.get(ENDPOINT + "character_all_info/" + id);
        return result.data;
    },
    async getOne(id) {
        const result = await axios.get(ENDPOINT + '/' + id);
        return result.data;
    },
    async post(todo) {
        const result = await axios.post(ENDPOINT, todo);
        return result.data
    },
    async delete(todo) {
        const result = await axios.delete(ENDPOINT + '/' + todo.id);
        return result.data
    },
    async patch(todo) {
        const result = await axios.patch(ENDPOINT + '/' + todo.id, todo);
        return result.data
    }
}

export default characterAPI