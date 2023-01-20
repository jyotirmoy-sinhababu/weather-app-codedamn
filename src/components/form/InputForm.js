import React from 'react';

const InputForm = ({ handleChange }) => {
  return (
    <>
      <form>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type='text'
          className='frm-inp-holder'
          name='lat'
          placeholder='latitude'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type='text'
          className='frm-inp-holder'
          name='lon'
          placeholder='longitude'
        />
        <button></button>
      </form>
    </>
  );
};

export default InputForm;
