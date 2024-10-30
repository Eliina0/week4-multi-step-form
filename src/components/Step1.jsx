import React from 'react';

const Step1 = ({ data, updateData, handleNextStep}) => {
  
console.log(data);

const handleChange = (e) => {
  const { name , value} = e.target;
  updateData({[name] : value});
}

const handelSubmit= (e) => {
  e.preventDefault();
  handleNextStep();
 }

  return (
    <form onSubmit={handelSubmit}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <label>Surname: </label>
      <input
        type="text"
        name="surname"
        value={data.surname}
        onChange={handleChange}
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
