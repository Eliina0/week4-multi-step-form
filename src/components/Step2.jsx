import React from 'react';

const Step2 = ({ data, updateData, handlePrevStep, handleNextStep}) => {
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
      <label>Age: </label>
      <input
        type="number"
        name="age"
        value={data.age}
        onChange={handleChange}
      />
      <label>Gender: </label>
      <input
        type="text"
        name="gender"
        value={data.gender}
        onChange={handleChange}
      />
      <button onClick={handlePrevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
