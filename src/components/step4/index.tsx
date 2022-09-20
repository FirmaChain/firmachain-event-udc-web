import React, { useEffect } from 'react';

import { Step4Wrapper } from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
}

const Step4 = ({ isActive, setStep }: IProps) => {
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setStep(4);
      }, 4500);
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Step4Wrapper>
      <video muted autoPlay playsInline width={'100%'}>
        <source src='/box.mp4' />
      </video>
    </Step4Wrapper>
  );
};

export default React.memo(Step4);
