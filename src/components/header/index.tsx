import React from 'react';
import { HeaderContainer, Wrapper } from './styles';
import styled from 'styled-components';

export const AddressBox = styled.div`
  width: 397px;
  height: 53px;
  line-height: 53px;
  background-image: url('/images/common/img_top_menu_user.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 2rem;
  dispaly: flex;
`;

export const AddressTypo = styled.div`
  display: flex;
  margin-left: 55px;
  margin-top: -1px;
`;

export const LogoutButton = styled.img``;

interface IProps {
  signer: string;
  currentStep: number;
  setStep: (step: number) => void;
  setSigner: (signer: string) => void;
}

const Header = ({ signer, currentStep, setStep, setSigner }: IProps) => {
  const logout = () => {
    setSigner('');
    setStep(0);
  };

  return (
    <HeaderContainer>
      <Wrapper>
        {currentStep > 0 && currentStep < 3 && (
          <>
            {signer && (
              <AddressBox>
                <AddressTypo>{`${signer.slice(0, 14)}...${signer.slice(-15)}`}</AddressTypo>
              </AddressBox>
            )}
            <LogoutButton src='/images/common/img_top_menu_logout.png' onClick={logout} />
          </>
        )}
      </Wrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
