import React, { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';
import Step5 from '../components/step5';

import { useTranslate } from '../utils/locale';

import { MainContainer, ContentsContainer } from '../styles';

interface IProps {
  setLoading: (isLoading: boolean) => void;
}

const Main = ({ setLoading }: IProps) => {
  const { t, setLanguage } = useTranslate();
  const [currentStep, setStep] = useState(0);
  const [signer, setSigner] = useState('');

  return (
    <>
      <MainContainer>
        <Header signer={signer} />

        <ContentsContainer currentStep={currentStep}>
          <Step1 isActive={currentStep === 0} setStep={setStep} setLanguage={setLanguage} />
          <Step2 isActive={currentStep === 1} setStep={setStep} t={t} setSigner={setSigner} />
          <Step3 isActive={currentStep === 2} setStep={setStep} t={t} setLoading={setLoading} signer={signer} />
          <Step4 isActive={currentStep === 3} setStep={setStep} />
          <Step5 isActive={currentStep === 4} t={t} signer={signer} />
        </ContentsContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default React.memo(Main);
