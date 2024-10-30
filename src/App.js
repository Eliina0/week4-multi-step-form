import React from 'react';
import './App.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import useMultiStepForm from './customHook/useMultiStepForm';
import Buttons from './components/Buttons';

const App = () => {
  const { data, updateData, step, handleNextStep, handlePrevStep, handleDeleteData } = useMultiStepForm();

  return (
    <div className="app-container">
      <h2>Multiple Step Form</h2>
      <div className="form-container">
        {step === 1 && <Step1 data={data} updateData={updateData} />}
        {step === 2 && <Step2 data={data} updateData={updateData} />}
        {step === 3 && <Step3 data={data} updateData={updateData} />}
        {step === 4 && <Step4 data={data} />}
        <Buttons step={step} handleDeleteData={handleDeleteData} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
      </div>
    </div>
  );
};

export default App;
