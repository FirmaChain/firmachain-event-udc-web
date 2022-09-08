import React from 'react';

import { Logo, TitleText, ButtonWrapper, Button, Step1Wrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
  setLanguage: (language: string) => void;
}

const Step1 = ({ setStep, setLanguage }: IProps) => {
  const onClickLanguage = (language: string) => {
    setLanguage(language);
    setStep(1);
  };

  return (
    <Step1Wrapper>
      <Logo />
      <TitleText>UDC 2022 FIRMACHAIN</TitleText>
      <TitleText>AIRDROP EVENT</TitleText>
      <ButtonWrapper>
        <Button isActive={true} onClick={() => onClickLanguage('kr')}>
          KR
        </Button>
        <Button isActive={true} onClick={() => onClickLanguage('en')}>
          EN
        </Button>
      </ButtonWrapper>
    </Step1Wrapper>
  );
};

export default React.memo(Step1);
