import axios from "axios";





export default class userService {
    static async getAll() {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/usersList')
        return response.data;

    }
    static async delUserById(id){
        const response =  await axios.delete(`http://127.0.0.1:8000/api/v1/usersList/${id}/`)
    }

    
}




