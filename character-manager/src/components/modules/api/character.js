import axios from "axios"

const ENDPOINT = "http://localhost:5001/"


const characterAPI = {
    async getAll(id) {
        const result = await axios.get(ENDPOINT + "character_all_info/" + id);
        return result.data;
    },
    async getOne(id) {
        const result = await axios.get(ENDPOINT + '/' + id);
        return result.data;
    },
    async getCharacterList(){
        const result = await axios.get(ENDPOINT + 'character')
        return result.data
    },
    async post(character) {
        const result = await axios.post(ENDPOINT + 'character_all_info', character);
        return result.data
    },
    async delete(id) {
        const result = await axios.delete(ENDPOINT + id + '/delete');
        return result.data
    },
    async patch(todo) {
        const result = await axios.patch(ENDPOINT + '/' + todo.id, todo);
        return result.data
    }
}

export default characterAPI