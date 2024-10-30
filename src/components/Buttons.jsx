import React from 'react';

const Buttons = ({ step, handleNextStep, handlePrevStep, handleDeleteData }) => {
  return (
    <div>
      {step > 1  && (
        <button onClick={handlePrevStep}>Back</button>
      )}
      
      {step < 4 && (
        <button onClick={handleNextStep}>Next</button>
      )}
      
      {step === 4 && (
        <button onClick={handleDeleteData}>Delete All</button>
      )}
    </div>
  );
};

export default Buttons;
