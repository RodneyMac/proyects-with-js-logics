import React from 'react';
import Nav from '../Nav/Nav';

const Crud = () => {
  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex justify-content-center'>
        <form className='border rounded px-4 w-50'>
          <h3 className='text-warning mt-2 text-center'>Add User</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' placeholder="Add name" name="name" autoFocus/>
          </div>
          <div className='mb-3 mt-3'>
            <input type="number" className='form-control' placeholder="Add age" name="age"/>
          </div>
          <div className='mb-3 text-center'>
            <button className='btn btn-primary'>Send</button>
          </div>
          <ol></ol>
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