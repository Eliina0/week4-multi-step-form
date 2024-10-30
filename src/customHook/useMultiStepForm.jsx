import { useState, useEffect } from 'react';

const useMultiStepForm = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    companyName: '',
    companyCode: ''
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));
    const savedStep = JSON.parse(localStorage.getItem('step'));
    
    if (savedData) setData(savedData);
    if (savedStep) setStep(savedStep);
  }, []);

  const updateData = (newData) => {
    setData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      //localStorage.setItem('data', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleNextStep = () => {
    setStep((prevStep) => {
      const newStep = prevStep + 1;
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('step', newStep);
      return newStep;
    });
  };

  const handlePrevStep = () => {
    setStep((prevStep) => {
      const newStep = prevStep - 1;
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('step', newStep);
      return newStep;
    });
  };

  const handleDeleteData = () => {
    setStep(1);
    setData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      companyName: '',
      companyCode: ''
    });
    localStorage.removeItem('data');
    localStorage.removeItem('step');
  };

  return {
    data,
    updateData,
    step,
    handleNextStep,
    handlePrevStep,
    handleDeleteData
  };
};

export default useMultiStepForm;
