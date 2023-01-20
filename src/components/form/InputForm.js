import React from 'react';

const InputForm = () => {
  return (
    <>
      <form>
        <input
          type='text'
          className='frm-inp-holder'
          name='lat'
          placeholder='latitude'
        />
        <input
          type='text'
          className='frm-inp-holder'
          name='lon'
          placeholder='longitude'
        />
      </form>
    </>
  );
};

export default InputForm;
