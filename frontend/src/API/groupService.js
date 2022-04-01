import axios from "axios";

import Mymodal from "../UI/MyModal/MyModal";





export default class groupService {
    static async getAll() {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/groupsList')
        return response.data;

    }
    static async delGroupById(id){
        
        const response =  await axios.delete(`http://127.0.0.1:8000/api/v1/groupsList/${id}/`)
    
    }

}