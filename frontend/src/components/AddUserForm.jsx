import axios from 'axios';
import React, { useEffect, useState } from 'react';
import groupService from '../API/groupService';
import userService from '../API/usersService';
import Mybutton from '../UI/buttons/MyButton';
import Myinput from '../UI/inputs/MyInput';
import Mymodal from '../UI/MyModal/MyModal';


const Adduserform = ({ create, groups, error }) => {

    const [user, setUser] = useState({ username: '', })


    const postData = async (e) => {
        e.preventDefault()


        if (user.username || user.group) {
            const addUser = await axios.post('http://127.0.0.1:8000/api/v1/usersList', {
                username: user.username,
                group: user.group,
            }).then(res => (res)).catch(e => console.log(e))
            create(addUser)
            setUser({ username: '', group: { option } })


        }
        else {

            alert('Заполните все поля')
        }

    }

    const [option, setOption] = useState('Select a group')


    return (
        <form>
            <Myinput
                value={user.username}
                onChange={e => setUser({ ...user, username: e.target.value })}
                type="text"
                placeholder="username"
            />
            <select style={{ margin: '20px 20px' }} value={user.group} onChange={e => setUser({ ...user, group: e.target.value })}>
                <option key={user.group}>{option}</option>
                {groups.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
            <Mybutton onClick={postData}>Add User</Mybutton>
            {error && <h1>{error}</h1>}
        </form>
    );
}

export default Adduserform;
