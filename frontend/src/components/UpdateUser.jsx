import axios from 'axios';
import React, { useEffect, useState } from 'react';
import groupService from '../API/groupService';
import userService from '../API/usersService';
import Mybutton from '../UI/buttons/MyButton';
import Myinput from '../UI/inputs/MyInput';
import Mymodal from '../UI/MyModal/MyModal';

const Updateuser = (props) => {


    const [user, setUser] = useState({ username: '', })

    const postData = async (e) => {
        e.preventDefault()
        if (!user.username || !user.group) {
            alert('Заполните все поля')

        } else {

            const updateUser = await axios.put(`http://127.0.0.1:8000/api/v1/usersList/${props.user.id}/`, {
                username: user.username,
                group: user.group,
            }).then(res => (res)).catch(e => console.log(e))
            setUser({ username: '' })
            props.create(updateUser)




        }

    }

    return (
        <form>
            <Myinput
                value={user.username}
                onChange={e => setUser({ ...user, username: e.target.value })}
                type="text"
                placeholder="username"
            />
            <select style={{ margin: '20px 20px' }} onChange={e => setUser({ ...user, group: e.target.value })}>
                <option key={user.group} value={user.group}>Select a group</option>
                {props.groups.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
            <Mybutton onClick={postData}>Update User</Mybutton>
        </form>
    );
}

export default Updateuser;
