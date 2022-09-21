import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Step5Wrapper,
  BackgroundWrapper,
  RewardEffectBreadpare,
  RewardEffectLeftStar,
  RewardEffectRightStar,
  RewardBackground,
  RewardContents,
  RewardTitle,
  QRDiv,
  TimerText3,
  TokenRewardWrapper,
  TokenAmountWrapper,
  TokenIcon,
  NumberImg,
  CommaImg,
  SymbolImg,
  NftImageCard,
} from '../../styles';

interface IProps {
  isActive: boolean;
  t: (key: string) => string;
  setLoading: (isLoading: boolean) => void;
  setStep: (step: number) => void;
  setSigner: (signer: string) => void;
  signer: string;
}

const Step5 = ({ isActive, t, setStep, setLoading, setSigner, signer }: IProps) => {
  const [tokenAmount, setTokenAmount] = useState(10000);
  // const [nftName, setNftName] = useState('');
  const [nftImageURL, setNftImageURL] = useState('');

  useEffect(() => {
    if (isActive) {
      getUserInfo().catch((error) => {
        console.log(error);
      });
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const getUserInfo = async () => {
    const userInfoResponse = await axios.get(`${process.env.REACT_APP_API_HOST}/event/users/${signer}`);

    if (userInfoResponse.data.code === 0) {
      const rewardData = JSON.parse(userInfoResponse.data.result.rewardData);
      setNftImageURL(rewardData.imageURL);
      // setNftName(rewardData.name);
      setTokenAmount(rewardData.tokenData);
    } else {
      throw new Error('INVALID REQUEST');
    }
  };

  // const requestQRCallback = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSigner('');
  //     setStep(0);
  //   }, 2000);
  // };

  const renderNumberImage = () => {
    const tokenNumber = tokenAmount.toString().split('');
    return (
      <TokenAmountWrapper>
        <NumberImg src={`/images/common/text_${tokenNumber[0]}@3x.png`} />
        <NumberImg src={`/images/common/text_${tokenNumber[1]}@3x.png`} />
        <CommaImg src={`/images/common/text_comma@3x.png`} />
        <NumberImg src={`/images/common/text_${tokenNumber[2]}@3x.png`} />
        <NumberImg src={`/images/common/text_${tokenNumber[3]}@3x.png`} />
        <NumberImg src={`/images/common/text_${tokenNumber[4]}@3x.png`} />
      </TokenAmountWrapper>
    );
  };

  const refreshQR = () => {
    // setRefresh(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSigner('');
      setStep(0);
    }, 2000);
  };

  return (
    <Step5Wrapper>
      {/* <NftNotification>
        <NftImage src={nftImageURL} />
        <NftName>{nftName}</NftName>
      </NftNotification> */}
      <BackgroundWrapper>
        <RewardEffectBreadpare src='/images/step5/img_effect_breadpare.png' />
        <RewardEffectLeftStar src='/images/step5/img_effect_star_left.png' />
        <RewardEffectRightStar src='/images/step5/img_effect_star_right.png' />
        <RewardBackground src={t('step5Box')} />
      </BackgroundWrapper>
      <RewardContents>
        <RewardTitle src={t('step5Text1')} />
        <TokenRewardWrapper>
          <TokenIcon src='/images/step5/img_fct_coin_60px.png' />
          {renderNumberImage()}
          <SymbolImg src='/images/common/text_uet@3x.png' />
        </TokenRewardWrapper>
        <QRDiv>
          <NftImageCard src={nftImageURL} />
          {/* <RequestQR
            qrSize={100}
            requestType='reward'
            isActive={isActive}
            isRefresh={isRefresh}
            setRefresh={setRefresh}
            setLoading={setLoading}
            callback={requestQRCallback}
            signer={signer}
            setTimerText={setTimerText}
          /> */}
        </QRDiv>
        <TimerText3 onClick={refreshQR}>close</TimerText3>
      </RewardContents>
    </Step5Wrapper>
  );
};

export default React.memo(Step5);
