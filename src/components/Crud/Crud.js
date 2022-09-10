import React, { useState } from 'react';
import Nav from '../Nav/Nav';

const Crud = () => {
  const generateId = () => {
    let generate = Math.floor(Math.random() * 1000);
    return generate;
  }

  const [addUser, setAddUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [findUser, setFindUser] = useState({name: "", age: ""});

  const handleAddUserChange = (e) => {
    setAddUser({
      ...addUser,
      [e.target.name] : e.target.value
    });
  }

  const handleAddUser = (e) => {
    e.preventDefault();
    let newUser = {...addUser, id: generateId()};
    setUserList((state) => [...state, newUser]);
    setAddUser({});
    console.log("New User:", newUser);
  }

  const handleFindUserChange = (e) => {
    setFindUser({
      ...findUser,
      [e.target.name] : e.target.value
    })
  }

  const handleFindUser = (e) => {
    e.preventDefault();
    let find = userList.find((item) => item.name === findUser.name);
    setFindUser(find);
  }

  const handleEditUser = (e) => {
    e.preventDefault();
    setUserList((state) => state.map((item) => item.id === findUser.id ? findUser : item));
    console.log("User Edited: ", findUser);
  }

  const handleDeleteUser = (e) => {
    e.preventDefault();
    let deleteUser = userList.filter((item) => item.id !== findUser.id);
    setUserList(deleteUser);
    console.log("User deleted: ", deleteUser);
  }
  
  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex justify-content-center'>
        <form className='border rounded px-4 w-auto'>
          <h3 className='text-warning mt-2 text-center'>Add User</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Enter name" name="name" onChange={handleAddUserChange} autoFocus/>
          </div>
          <div className='mb-3 mt-3'>
            <input type="number" className='form-control' placeholder="Enter age" name="age" onChange={handleAddUserChange}/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-primary' onClick={handleAddUser}>Send</button>
          </div>
          <ol className='d-flex flex-column text-center text-info'>
            {userList.map((item) => (
              <li key={item.id}><b className='text-info'>Id:</b><b className='text-warning mx-2'>{item.id}</b><b className='text-info'>Name:</b><b className='text-warning mx-2'>{item.name}</b><b className='text-info'>Age:</b><b className='text-warning mx-2'>{item.age}</b></li>
            ))}
          </ol>
          <hr className='text-white'/>
          <h3 className='text-warning mt-2 text-center'>Find User</h3>
          <ol></ol>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Search by name to edit or delete" name="name" onChange={handleFindUserChange} value={findUser.name}/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-primary' onClick={handleFindUser}>Find</button>
          </div>
          <hr className='text-white'/>
          <h3 className='text-warning mt-2 text-center'>Edit User</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Name" name="name" onChange={handleFindUserChange} value={findUser.name}/>
          </div>
          <div className='mb-3 mt-3'>
            <input type="number" className='form-control' placeholder="Age" name="age" onChange={handleFindUserChange} value={findUser.age}/>
          </div>
          <div className='mb-3 d-flex justify-content-around'>
            <button className='btn btn-primary' onClick={handleEditUser}>Edit</button>
            <button className='btn btn-danger' onClick={handleDeleteUser}>Delete</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Crud;