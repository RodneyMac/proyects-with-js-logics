import React, { useState } from 'react';
import Nav from '../Nav/Nav';

const Crud = () => {
  const generateId = () => {
    let generate = Math.floor(Math.random() * 1000);
    return generate;
  }

  const [addUser, setAddUser] = useState({});
  const [userList, setUserList] = useState([]);

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
  
  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex justify-content-center'>
        <form className='border rounded px-4 w-50'>
          <h3 className='text-warning mt-2 text-center'>Add User</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Add name" name="name" onChange={handleAddUserChange} value={addUser.name} autoFocus/>
          </div>
          <div className='mb-3 mt-3'>
            <input type="number" className='form-control' placeholder="Add age" name="age" onChange={handleAddUserChange} value={addUser.age}/>
          </div>
          <div className='mb-3 text-center'>
            <button onClick={handleAddUser} className='btn btn-primary'>Send</button>
          </div>
          <ol className='text-center d-flex justify-content-center'>
            {userList.map((item) => (
              <li key={item.id}><b className='text-info'>Id:</b><b className='text-warning mx-2'>{item.id}</b><b className='text-info'>Name:</b><b className='text-warning mx-2'>{item.name}</b><b className='text-info'>Age:</b><b className='text-warning mx-2'>{item.age}</b></li>
            ))}
          </ol>
          <hr className='text-white'/>
          <h3 className='text-warning mt-2 text-center'>Find User</h3>
          <ol></ol>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Find name" name="name"/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-primary'>Find</button>
          </div>
          <hr className='text-white'/>
          <h3 className='text-warning mt-2 text-center'>Edit User</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Edit name" name="name"/>
          </div>
          <div className='mb-3 mt-3'>
            <input type="number" className='form-control' placeholder="Edit age" name="age"/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-primary'>Edit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Crud;