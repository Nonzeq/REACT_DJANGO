import React, { useEffect, useState } from 'react';
import groupService from '../API/groupService';
import { useFetching } from '../hooks/useFetching';

import Mybutton from '../UI/buttons/MyButton';
import Mydeletebtn from '../UI/buttons/MyDeleteBtn';
import Mymodal from '../UI/MyModal/MyModal';
import Updategroup from './UpdateGroup';

const Groupitem = (props) => {



    const [delGroups, isGroupsLoading, groupErorr] = useFetching(async () => {
        const response = await groupService.delGroupById(props.group.id)
        window.location.reload()

    })




    const [modal, setModal] = useState(false);
    const [modalError, setModalError] = useState(false);

    return (

        <div className="post">

            <div className="post__content">
                <strong>ID: {props.group.id}</strong>
                <div className="post__body"><strong>Group:</strong> {props.group.title}</div>
                <div className="post__body"><strong>Description:</strong> {props.group.description}</div>
                <div className="post__body"><strong>Created:</strong> {props.group.time_created}</div>
            </div>
            <div className='btns'>

                <Mybutton onClick={() => setModal(true)}>Edit Group</Mybutton>
                <Mymodal visible={modal} setVisible={setModal}><Updategroup group={props.group} create={props.create}></Updategroup></Mymodal>


                <Mydeletebtn onClick={() => (delGroups(props.group.id) || props.remove(props.g)) && setModalError(true)}>Delete Group</Mydeletebtn>


                {groupErorr && <Mymodal visible={modalError} setVisible={setModalError}> <div>{groupErorr}</div>
                    <Mybutton onClick={() => window.location.reload()}><p>OK</p></Mybutton>


                </Mymodal>}
            </div>

        </div>
    );
}

export default Groupitem;


