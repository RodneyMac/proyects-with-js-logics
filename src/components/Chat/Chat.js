import React, { useState } from 'react';
import Nav from '../Nav/Nav';

const Chat = () => {
  const generateId = () => {
    let generate = Math.floor(Math.random() * 1000);
    return generate;
  }

  const [chat1, setChat1] = useState({});
  const [chatList, setChatList] = useState([]);
  const [chat2, setChat2] = useState({});

  const handleChangeChat1 = (e) => {
    setChat1({
      ...chat1,
      [e.target.name] : e.target.value
    })
  }

  const handleChat1 = (e) => {
    e.preventDefault();
    let newChat1 = {...chat1, id: generateId()};
    setChatList((state) => [...state, newChat1]);
    setChat1(newChat1);
  }

  const handleChangeChat2 = (e) => {
    setChat2({
      ...chat2,
      [e.target.name] : e.target.value
    })
  }

  const handleChat2 = (e) => {
    e.preventDefault();
    let newChat2 = {...chat2, id: generateId()};
    setChatList((state) => [...state, newChat2]);
    setChat2(newChat2);
  }

  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex flex-column justify-content-center align-items-center'>
        <div className='border rounded px-4 w-auto'>
          <h3 className='text-info mt-2 text-center'>Chat 1</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Write a message here" name="chat1" onChange={handleChangeChat1} value={chat1.name} autoFocus/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-outline-primary' onClick={handleChat1}>Send</button>
          </div>
        </div>
        <div className='border rounded px-4 w-auto mt-4'>
          <h3 className='text-warning mt-2 text-center'>Chat 2</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Write a message here" name="chat2" onChange={handleChangeChat2} value={chat2.name}/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-outline-primary' onClick={handleChat2}>Send</button>
          </div>
        </div>
        <h3 className='text-primary text-center mt-4'>Message History</h3>
        <div className='w-auto mt-3'>
          <ol className='text-center'>
            {chatList.map((item) => {
              if(item.chat1) {
                return <div key={item.id} className="text-info d-flex justify-content-center"><li className='text-primary mx-4'>Chat 1: </li>{item.chat1}</div>
              } else if(item.chat2) {
                return <div key={item.id} className="text-warning d-flex justify-content-center"><li className='text-primary mx-4'>Chat 2: </li>{item.chat2}</div>
              }
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Chat;