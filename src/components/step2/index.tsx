import React, { useState } from 'react';
import axios from 'axios';

import LoginFade from '../loginFade';
import RequestQR from '../requestQR';

import { TitleText, QRWrapper, Step2Wrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
  t: (key: string) => string;
  setSigner: (signer: string) => void;
}

const Step2 = ({ isActive, setStep, setSigner, t }: IProps) => {
  const [address, setAddress] = useState('');
  const [loginAction, setLoginAction] = useState(false);

  const checkNextStep = async (signer: string) => {
    const userInfoResponse = await axios.get(`/event/users/${signer}`);

    if (userInfoResponse.data.code === 0) {
      const rewardData = JSON.parse(userInfoResponse.data.result.rewardData);
      if (rewardData !== null) {
        if (rewardData.isQueue === true) {
          // already
          return 0;
        } else {
          // reward
          return 4;
        }
      } else {
        // normal
        return 2;
      }
    } else {
      throw new Error('INVALID REQUEST');
    }
  };

  const requestQRCallback = (result: any) => {
    checkNextStep(result.signer)
      .then((step: number) => {
        setAddress(result.signer);
        setSigner(result.signer);
        setLoginAction(true);
        setTimeout(() => {
          setLoginAction(false);
          setStep(step);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Step2Wrapper>
      <LoginFade
        text1={`${address && `${address.slice(0, 8)}...${address.slice(-8)}`}${t('loginText1')}`}
        text2={t('loginText2')}
        isActive={loginAction}
      />
      <TitleText>{t('step2Text1')}</TitleText>
      <TitleText>{t('step2Text2')}</TitleText>
      <QRWrapper>
        <RequestQR requestType='login' isActive={isActive} callback={requestQRCallback} />
      </QRWrapper>
    </Step2Wrapper>
  );
};

export default React.memo(Step2);
