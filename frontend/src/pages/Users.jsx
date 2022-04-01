
import React, { useEffect, useMemo, useState } from "react";
import groupService from "../API/groupService";
import userService from "../API/usersService";
import Adduserform from "../components/AddUserForm";
import UserItem from "../components/UserItem";
import { useFetching } from "../hooks/useFetching";
import Mybutton from "../UI/buttons/MyButton";
import Myloader from "../UI/Loader/Myloader";
import Mymodal from "../UI/MyModal/MyModal";


function Users() {


  const [users, setUsers] = useState([])

  const [groups, setGroups] = useState([])

  useEffect(() => {

    fetchUsers()
    getGroups()
  }, []);


  const [fetchUsers, isUserLoading, userErorr] = useFetching(async () => {
    const response = await userService.getAll();
    setUsers(response)


  })


  async function getGroups() {
    const response = await groupService.getAll()
    setGroups(response);
  }



  const createUser = (newUser) => {
    setUsers([...users, newUser])
    setModal(false)
    fetchUsers()

  }
  const [modal, setModal] = useState(false);


  const removeUser = (user) => {
    setUsers(users.filter(p => p.id !== user.id))
  }




  return (

    <div className="users__wrapper">
      <div className='add'><Mybutton onClick={() => setModal(true)}>
        Add User
      </Mybutton></div>
      <Mymodal visible={modal} setVisible={setModal}><Adduserform error={userErorr} groups={groups} create={createUser} /></Mymodal>


      {userErorr &&
        <div className="loaderError__container"><h1>{userErorr}</h1></div>
      }

      {isUserLoading
        ? <div className='users'><div className="loaderError__container"><Myloader /></div></div>
        : <div className='users'>
          {users.map((user, index) =>
            <UserItem user={user} groups={groups} key={user.id} number={index + 1} remove={removeUser} create={createUser} />
          )}

        </div>
      }
    </div>
  );
}

export default Users;
