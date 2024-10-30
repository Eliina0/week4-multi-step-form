import React from 'react';

const Step3 = ({ data, updateData,handleNextStep, handlePrevStep}) => {
    const handleChange = (e) => {
        const { name , value} = e.target;
        updateData({[name] : value});
      }
      
      const handleSubmit= (e) => {
        e.preventDefault();
        handleNextStep();
       }

  return (
    <form onSubmit={handleSubmit}>
      <label>Company name: </label>
      <input
        type="text"
        name="companyName"
        value={data.companyName}
        onChange={handleChange}
      />
      <label>Company Code: </label>
      <input
        type="text"
        name="companyCode"
        value={data.companyCode}
        onChange={handleChange}
      />
      <button onClick={handlePrevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step3;
