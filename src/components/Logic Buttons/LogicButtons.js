import React from 'react';
import Nav from '../Nav/Nav';

const LogicButtons = () => {
  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex justify-content-center'>
        <div className=''>
        <h3 className='text-success mt-2 text-center'>Logic Buttons</h3>
          <div className='mb-3 mt-3'>
            <input type="number" className='form-control' name="number" autoFocus/>
          </div>
          <div className='mt-4 text-center'>
            <button className='btn btn-outline-info mx-2'>1</button>
            <button className='btn btn-outline-info mx-2'>2</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogicButtons;