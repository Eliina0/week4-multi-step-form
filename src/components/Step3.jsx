import React from 'react';

const Step3 = ({ data, updateData}) => {
    const handleChange = (e) => {
        const { name , value} = e.target;
        updateData({[name] : value});
      }
      console.log(data);
      
  return (
    <form >
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
    </form>
  );
};

export default Step3;
