import axios from "axios"

const ENDPOINT = "http://localhost:5001/"

interface CharacterType {
  // 必要に応じて詳細を追加
  [key: string]: any;
}

const characterAPI = {
    async getAll(id: number | string): Promise<any> {
        const result = await axios.get(ENDPOINT + "character_all_info/" + id);
        return result.data;
    },
    async getOne(id: number | string): Promise<any> {
        const result = await axios.get(ENDPOINT + '/' + id);
        return result.data;
    },
    async getCharacterList(): Promise<any> {
        const result = await axios.get(ENDPOINT + 'character')
        return result.data
    },
    async post(character: CharacterType): Promise<any> {
        const result = await axios.post(ENDPOINT + 'character_all_info', character);
        return result.data
    },
    async delete(id: number | string): Promise<any> {
        const result = await axios.delete(ENDPOINT + id + '/delete');
        return result.data
    },
    async patch(todo: any): Promise<any> {
        const result = await axios.patch(ENDPOINT + '/' + todo.id, todo);
        return result.data
    }
}

export default characterAPI