import React from 'react';

const Step1 = ({ data, updateData}) => {
  
console.log(data);

const handleChange = (e) => {
  const { name , value} = e.target;
  updateData({[name] : value});
}

  return (
    <form >
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
    </form>
  );
};

export default Step1;
