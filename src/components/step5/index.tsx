import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LoginFade from '../loginFade';
import RequestQR from '../requestQR';

import { Step5Wrapper, TitleText, SubText, RewardTokenText, QRWrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  t: (key: string) => string;
  signer: string;
}

const Step5 = ({ isActive, t, signer }: IProps) => {
  const [tokenAmount, setTokenAmount] = useState(0);
  const [loginAction, setLoginAction] = useState(false);

  useEffect(() => {
    if (isActive) {
      getUserInfo().catch((error) => {
        console.log(error);
      });
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const getUserInfo = async () => {
    const userInfoResponse = await axios.get(`/event/users/${signer}`);

    if (userInfoResponse.data.code === 0) {
      const rewardData = JSON.parse(userInfoResponse.data.result.rewardData);
      setTokenAmount(rewardData.tokenData);
    } else {
      throw new Error('INVALID REQUEST');
    }
  };

  const requestQRCallback = () => {
    setLoginAction(true);
    setTimeout(() => {
      window.location.reload();
    }, 7000);
  };

  const numberFormat = (value: number | string) => {
    var val = value.toString().split('.');
    val[0] = val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return val.join('.');
  };

  return (
    <Step5Wrapper>
      <LoginFade
        text1={`${signer && `${signer.slice(0, 8)}...${signer.slice(-8)}`}${t('loginText1')}`}
        text2={''}
        isActive={loginAction}
      />
      <TitleText>{t('step5Text1')}</TitleText>
      <RewardTokenText>
        {numberFormat(tokenAmount)} UDC {t('step5Text2')}
      </RewardTokenText>
      <QRWrapper>
        <RequestQR requestType='reward' isActive={isActive} callback={requestQRCallback} signer={signer} />
      </QRWrapper>

      <SubText>{t('step5Text3')}</SubText>
    </Step5Wrapper>
  );
};

export default React.memo(Step5);
