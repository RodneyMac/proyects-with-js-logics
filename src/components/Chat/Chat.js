import React from 'react';
import Nav from '../Nav/Nav';
// import {Link} from "react-router-dom";

const Chat = () => {
  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex flex-column justify-content-center align-items-center'>
        <div className='border rounded px-4 w-50'>
          <h3 className='text-info mt-2 text-center'>Chat 1</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Write a message here" name="chat1" autoFocus/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-outline-success'>Send</button>
          </div>
        </div>
        <div className='border rounded px-4 w-50 mt-4'>
          <h3 className='text-info mt-2 text-center'>Chat 2</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Write a message here" name="chat2"/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-outline-success'>Send</button>
          </div>
        </div>
        <h3 className='text-info mt-2 text-center mt-4'>Message History</h3>
        <div className='px-4 w-50 mt-4'>
          <ol></ol>
        </div>
      </div>
    </>
  )
}

export default Chat;