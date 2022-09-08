import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Step4Wrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
}

const openDiv = keyframes`
  0% {
    margin-left:-100%;
    width: 0;
  }
  100% {
    margin-left:0;
    width: 100%;
  }
`;

const GifWrapper = styled.div`
  width: 0;
  height: 500px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${openDiv};
  animation-fill-mode: forwards;
`;

const GifImage = styled.img<{ isShow: boolean }>`
  height: 100%;
  ${(props) => (props.isShow ? '' : 'display:none')}
`;

const Step4 = ({ isActive, setStep }: IProps) => {
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setShow(false);
        setStep(4);
      }, 4500);
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Step4Wrapper>
      <GifWrapper>
        <GifImage isShow={isShow} src='/images/rewardbox.gif' />
      </GifWrapper>
    </Step4Wrapper>
  );
};

export default React.memo(Step4);
