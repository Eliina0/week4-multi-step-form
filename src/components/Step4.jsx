import React from 'react'

const Step4 = ( {data, handlePrevStep, handleDeleteData} ) => {
  return (
    <div>
        <p>Name : {data.name}</p>
        <p>Surname : {data.surname}</p>
        <p>Age: {data.age}</p>
        <p>Gender: {data.gender}</p>
        <p>Company Name : {data.companyName}</p>
        <p>Company Code : {data.companyCode}</p>
        <button onClick={handlePrevStep}>Back</button>
        <button onClick={handleDeleteData}>Delete data</button>
    </div>
  )
}

export default Step4