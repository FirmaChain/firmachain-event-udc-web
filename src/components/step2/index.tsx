import React, { useState } from 'react';
import axios from 'axios';

import RequestQR from '../requestQR';

import {
  BackgroundWrapper,
  QRWrapper,
  Step2Wrapper,
  Step2TextWrapper,
  Step2TitleText,
  Step2SubText,
  TimerTextBox,
  TimerText,
  BackgroundStep2LeftCloud1,
  BackgroundStep2RightCloud1,
  Step2Character1,
  Step2Character2,
  Step2Character1Star,
} from '../../styles';

import { useSnackbar } from 'notistack';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
  setLoading: (isLoading: boolean) => void;
  t: (key: string) => string;
  setSigner: (signer: string) => void;
}

const Step2 = ({ isActive, setStep, setLoading, setSigner, t }: IProps) => {
  const [timerText, setTimerText] = useState('00:00');
  const [isRefresh, setRefresh] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const checkNextStep = async (signer: string) => {
    const userInfoResponse = await axios.get(`${process.env.REACT_APP_API_HOST}/event/users/${signer}`);

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
        if (step !== 0) {
          setSigner(result.signer);
          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setStep(step);
          }, 1000);
        } else {
          enqueueSnackbar(t('alreadyFinish'), {
            variant: 'error',
            autoHideDuration: 3000,
          });

          setTimeout(() => {
            setStep(step);
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshQR = () => {
    setRefresh(true);
  };

  return (
    <Step2Wrapper>
      <BackgroundWrapper>
        <BackgroundStep2LeftCloud1 src='/images/step2/img_sub_cloud_left.png' />
        <BackgroundStep2RightCloud1 src='/images/step2/img_sub_cloud_right.png' />
        <Step2Character1 src='images/step2/img_sub_dodo.png' />
        <Step2Character2 src='images/step2/img_sub_dori.png' />
        <Step2Character1Star src='images/step2/img_sub_rhombus.png' />
      </BackgroundWrapper>
      <Step2TextWrapper>
        <Step2TitleText src={t('step2Text1')} />
        <Step2SubText src={t('step2Text2')} />
      </Step2TextWrapper>
      <QRWrapper src={'/images/step2/img_qr_300px.png'}>
        <RequestQR
          requestType='login'
          setLoading={setLoading}
          isActive={isActive}
          isRefresh={isRefresh}
          setRefresh={setRefresh}
          setTimerText={setTimerText}
          callback={requestQRCallback}
          qrSize={190}
        />
      </QRWrapper>
      <TimerTextBox src={'/images/step2/box_count_156px.png'} onClick={refreshQR}>
        <TimerText>{timerText}</TimerText>
      </TimerTextBox>
    </Step2Wrapper>
  );
};

export default React.memo(Step2);
