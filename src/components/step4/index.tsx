import React, { useEffect, useRef } from 'react';

import { Step4Wrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
}

const Step4 = ({ isActive, setStep }: IProps) => {
  const videoRef = useRef<any>();

  useEffect(() => {
    if (isActive) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();

      setTimeout(() => {
        setStep(4);
      }, 4500);
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Step4Wrapper>
      <video muted autoPlay playsInline width={'100%'} ref={videoRef}>
        <source src='/box.mp4' />
      </video>
    </Step4Wrapper>
  );
};

export default React.memo(Step4);
