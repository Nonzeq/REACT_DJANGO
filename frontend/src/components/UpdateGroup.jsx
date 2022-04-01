import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import Mybutton from '../UI/buttons/MyButton';
import Myinput from '../UI/inputs/MyInput';

const Updategroup = (props) => {


    const [group, setGroup] = useState({ title: '', description: '', })

    const postData = async (e) => {
        e.preventDefault()
        if (!group.title || !group.description) {
            alert('Заполните все поля')

        } else {

            const updateGroupe = await axios.put(`http://127.0.0.1:8000/api/v1/groupsList/${props.group.id}/`, {
                title: group.title,
                description: group.description,
            }).then(res => (res)).catch(e => console.log(e))
            setGroup({ title: '', description: '' })
            props.create(updateGroupe)
        }
    }



    return (
        <form>
            <Myinput
                value={group.title}
                onChange={e => setGroup({ ...group, title: e.target.value })}
                type="text"
                placeholder="Group name"
            />
            <Myinput
                value={group.description}
                onChange={e => setGroup({ ...group, description: e.target.value })}
                type="text"
                placeholder="Descriptions"
            />
            <Mybutton onClick={postData}>Add new group</Mybutton>
        </form>
    );
}

export default Updategroup;
