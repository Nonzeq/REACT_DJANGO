import { useState } from 'react';
import userService from '../API/usersService';
import Mybutton from '../UI/buttons/MyButton';
import Mydeletebtn from '../UI/buttons/MyDeleteBtn';
import Mymodal from '../UI/MyModal/MyModal';
import Updateuser from './UpdateUser';

const UserItem = (props) => {



    async function deleteUser(id) {
        const res = await userService.delUserById(id);

    }

    const [modal, setModal] = useState(false);



    return (
        <div key={props.user.id} className="post">
            <div className="post__content">
                <strong>ID: {props.user.id}</strong>
                <div className="post__body"><strong>Username:</strong> {props.user.username}</div>
                <div className="post__body"><strong>Group:</strong> {props.user.group_name}</div>
                <div className="post__body"><strong>Create:</strong> {props.user.time_created}</div>
            </div>
            <div className='btns'>
                <Mybutton onClick={() => setModal(true)}>Edit User</Mybutton>
                <Mymodal visible={modal} setVisible={setModal}><Updateuser
                    key={props.user.id}
                    create={props.create}
                    user={props.user}
                    groups={props.groups}>
                </Updateuser></Mymodal>
                <Mydeletebtn onClick={() => props.remove(props.user) || deleteUser(props.user.id)}>Delete User</Mydeletebtn>
            </div>

        </div>
    );
}

export default UserItem;
