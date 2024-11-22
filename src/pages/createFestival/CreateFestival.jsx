import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputHistory from '../../components/createFestival/InputHistory';
import Step1 from '../../components/createFestival/Steps/Step1';
import Step2 from '../../components/createFestival/Steps/Step2';
import Step3 from '../../components/createFestival/Steps/Step3';
import Step4 from '../../components/createFestival/Steps/Step4';
import Step5 from '../../components/createFestival/Steps/Step5';
import Step6 from '../../components/createFestival/Steps/Step6';
import Step7 from '../../components/createFestival/Steps/Step7';
import Step8 from '../../components/createFestival/Steps/Step8';
import Step9 from '../../components/createFestival/Steps/Step9';
import Header from '../../components/common/header/Header';
import { setCurrentStep } from '../../redux/slices/historySlice';

const CreateFestival = () => {
  const currentStep = useSelector(state => state.history.currentStep);
  const dispatch = useDispatch();

  const handleNextStep = nextStep => {
    console.log(`Moving to step ${nextStep}`);
    dispatch(setCurrentStep(nextStep));
  };

  const renderStep = () => {
    const steps = {
      1: <Step1 onNextStep={() => handleNextStep(2)} />,
      2: <Step2 onNextStep={() => handleNextStep(3)} />,
      3: <Step3 onNextStep={() => handleNextStep(4)} />,
      4: <Step4 onNextStep={() => handleNextStep(5)} />,
      5: <Step5 onNextStep={() => handleNextStep(6)} />,
      6: <Step6 onNextStep={() => handleNextStep(7)} />,
      7: <Step7 onNextStep={() => handleNextStep(8)} />,
      8: <Step8 onNextStep={() => handleNextStep(9)} />,
      9: <Step9 />,
    };

    console.log(`Rendering component for step ${currentStep}`);
    return steps[currentStep] || null;
  };

  React.useEffect(() => {
    console.log(`Step updated to ${currentStep}`);
  }, [currentStep]);

  return (
    <>
      <Header />
      {currentStep > 1 && currentStep < 9 && (
        <InputHistory setCurrentStep={step => handleNextStep(step)} />
      )}
      {renderStep()}
    </>
  );
};

export default CreateFestival;
