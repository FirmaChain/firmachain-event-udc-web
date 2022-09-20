import React from 'react';

import {
  BackgroundLeftCloud1,
  BackgroundLeftCloud2,
  BackgroundRightCloud1,
  BackgroundRightCloud2,
  ContentsWrapper,
  LogoImage,
  TitleImage,
  TitleCoin,
  ButtonContainer,
  ButtonImage,
  Character1,
  Character2,
  Character3,
  TokenImage,
  Step1Wrapper,
  BackgroundWrapper,
} from '../../styles';

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
      <BackgroundWrapper>
        <BackgroundLeftCloud1 src='images/step1/img_main_cloud_left_1.png' />
        <BackgroundLeftCloud2 src='images/step1/img_main_cloud_left_2.png' />
        <BackgroundRightCloud1 src='images/step1/img_main_cloud_right_1.png' />
        <BackgroundRightCloud2 src='images/step1/img_main_cloud_right_2.png' />
        <TokenImage src='images/step1/img_coin_1.png' />
        <Character1 src='images/step1/img_main_dodo_1.png' />
        <Character2 src='images/step1/img_main_dori_1.png' />
        <Character3 src='images/step1/img_main_doyil_1.png' />
      </BackgroundWrapper>
      <ContentsWrapper>
        <LogoImage src='/images/step1/img__main_symbol.png' />
        <TitleImage src='/images/step1/img_main_title_text.png' />
        <TitleCoin src='/images/step1/img_coin_2.png' />
        <ButtonContainer>
          <ButtonImage src='/images/step1/btn_eng.png' onClick={() => onClickLanguage('en')} />
          <ButtonImage src='/images/step1/btn_kor.png' onClick={() => onClickLanguage('kr')} />
        </ButtonContainer>
      </ContentsWrapper>
    </Step1Wrapper>
  );
};

export default React.memo(Step1);
