import React, { useState } from 'react';

import Header from '../components/header';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';
import Step5 from '../components/step5';

import { useTranslate } from '../utils/locale';

import {
  MainContainer,
  ContentsContainer,
  CommonBackground,
  BackgroundMainCloud,
  TopCloundWrapper,
  TopCloud1,
  TopCloud2,
  TopCloud3,
  TopCloud4,
} from '../styles';

interface IProps {
  setLoading: (isLoading: boolean) => void;
}

const Main = ({ setLoading }: IProps) => {
  const { t, setLanguage } = useTranslate();
  const [currentStep, setStep] = useState(4);
  const [signer, setSigner] = useState('');

  return (
    <>
      <MainContainer>
        <Header signer={signer} currentStep={currentStep} setStep={setStep} setSigner={setSigner} />
        <CommonBackground>
          <BackgroundMainCloud src='/images/common/img_main_back_cloud.png' />
          <TopCloundWrapper>
            <TopCloud1 src='images/common/img_top_cloud_1.png' />
            <TopCloud2 src='images/common/img_top_cloud_2.png' />
            <TopCloud3 src='images/common/img_top_cloud_3.png' />
            <TopCloud4 src='images/common/img_top_cloud_4.png' />
          </TopCloundWrapper>
        </CommonBackground>
        <ContentsContainer currentStep={currentStep}>
          <Step1 isActive={currentStep === 0} setStep={setStep} setLanguage={setLanguage} />
          <Step2 isActive={currentStep === 1} setStep={setStep} t={t} setLoading={setLoading} setSigner={setSigner} />
          <Step3 isActive={currentStep === 2} setStep={setStep} t={t} setLoading={setLoading} signer={signer} />
          <Step4 isActive={currentStep === 3} setStep={setStep} />
          <Step5
            isActive={currentStep === 4}
            setStep={setStep}
            t={t}
            setLoading={setLoading}
            setSigner={setSigner}
            signer={signer}
          />
        </ContentsContainer>
      </MainContainer>
    </>
  );
};

export default React.memo(Main);
