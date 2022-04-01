import React, { useState, useEffect } from 'react';
import groupService from '../API/groupService';
import Addgroupform from '../components/AddGroupForm';
import Groupitem from '../components/GroupItem';
import { useFetching } from '../hooks/useFetching';
import Mybutton from '../UI/buttons/MyButton';
import Myloader from '../UI/Loader/Myloader';
import Mymodal from '../UI/MyModal/MyModal';

const Groups = () => {

    useEffect(() => {
        fetchGroups()
    }, []);


    const [groups, setGroups] = useState([])

    const [fetchGroups, isGroupsLoading, groupErorr] = useFetching(async () => {
        const response = await groupService.getAll();
        setGroups(response)

    })




    const [modal, setModal] = useState(false);

    const createGroup = (newGroup) => {
        setGroups([...groups, newGroup])
        setModal(false)
        fetchGroups()

    }

    const removeGroup = (group) => {
        setGroups(groups.filter(p => p.id !== group.id))
    }


    return (
        <div className='group__wrapper'>
            <div className='add'><Mybutton onClick={() => setModal(true)}>Add Group</Mybutton></div>
            <Mymodal visible={modal} setVisible={setModal}><Addgroupform create={createGroup} /></Mymodal>

            {groupErorr &&
                <div className="loaderError__container"><h1>{groupErorr}</h1></div>
            }

            {isGroupsLoading
                ? <div className='users'><div className="loaderError__container"><Myloader /></div></div>
                : <div key={Date.now()} className='groups'>
                    {groups.map((group) =>
                        <Groupitem group={group} key={group.id} create={createGroup} remove={removeGroup} />
                    )}
                </div>
            }
        </div>
    );
};

export default Groups;
