import React from 'react';

const Step2 = ({ data, updateData}) => {
    const handleChange = (e) => {
        const { name , value} = e.target;
        updateData({[name] : value});
      }
      console.log(data);
      
  return (
    <form>
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
    </form>
  );
};

export default Step2;
