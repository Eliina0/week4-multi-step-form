import React from 'react'

const Step4 = ( {data} ) => {
  return (
    <div>
        <p>Name : {data.name}</p>
        <p>Surname : {data.surname}</p>
        <p>Age: {data.age}</p>
        <p>Gender: {data.gender}</p>
        <p>Company Name : {data.companyName}</p>
        <p>Company Code : {data.companyCode}</p>
    </div>
  )
}

export default Step4