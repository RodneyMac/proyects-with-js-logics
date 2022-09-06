import React, { useState } from 'react';
import Nav from '../Nav/Nav';

const LogicButtons = () => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setQuantity({
      ...quantity,
      [e.target.name] : e.target.value
    })
  }

  const handleRequire = (e) => {
    e.preventDefault();
    if(!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      setQuantity(quantity + 1);
    } else {
      e.target.classList.remove("active");
      setQuantity(quantity - 1);
    }
  }

  return (
    <>
      <Nav/>
      <div className='mt-4 mb-4 d-flex justify-content-center'>
        <div className=''>
        <h3 className='text-success mt-2 text-center'>Logic Buttons</h3>
          <div className='mb-3 mt-3'>
            <input type="text" className='form-control' name="number" onChange={handleChange} value={quantity}/>
          </div>
          <div className='mt-4 text-center'>
            <button onClick={handleRequire} className='btn btn-outline-info mx-2'>1</button>
            <button onClick={handleRequire} className='btn btn-outline-info mx-2'>2</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogicButtons;