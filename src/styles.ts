import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #111;
`;

export const LoadingWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000bf;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const LoginWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000df;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const LoginTextWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
  & > div {
    text-align: center;
    font-size: 4.8rem;
    color: #eee;
    margin-top: 30px;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
`;

export const LoginText = styled.div<{ active: boolean }>`
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const TicketWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000df;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const ContentsContainer = styled.div<{ currentStep: number }>`
  width: 100%;
  height: 100%;
  flex: 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > div {
    display: none;
    flex: 1;
  }
  & > div:nth-child(${(props) => props.currentStep + 1}) {
    display: flex;
  }
`;

export const Logo = styled.div`
  width: 87px;
  height: 100px;
  background-image: url('/images/white_logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TitleText = styled.div`
  font-size: 4.8rem;
  color: #eee;
  margin-top: 10px;
`;

export const SubText = styled.div`
  font-size: 2rem;
  color: #aaa;
  margin-top: 6px;
  margin-bottom: 10px;
`;

export const Button = styled.div<{ isActive: boolean }>`
  width: auto;
  min-width: 110px;
  height: 50px;
  margin-top: 10px;
  padding: 0 10px;
  line-height: 50px;
  background-color: ${(props) => (props.isActive ? '#3550de' : '#888')};
  border-radius: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 1.8rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const QRWrapper = styled.div`
  width: auto;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 10px;
`;

const Step = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Step1Wrapper = styled(Step)``;
export const Step2Wrapper = styled(Step)``;
export const Step3Wrapper = styled(Step)``;
export const Step4Wrapper = styled(Step)``;
export const Step5Wrapper = styled(Step)``;

export const CharacterList = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const Character = styled.div<{ isAvailable: boolean }>`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  ${(props) => (props.isAvailable ? '' : 'filter: grayscale(100%);')}
`;

export const CharacterImage = styled.div<{ index: number }>`
  width: 200px;
  height: 200px;
  background-image: url('/images/character_type_${(props) => props.index}.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 20px;
`;

export const CharacterName = styled.div`
  width: 100%;
  font-size: 3.5rem;
  color: white;
  margin-bottom: 10px;
`;

export const CharacterDescription = styled.div`
  width: 100%;
  font-size: 2rem;
  color: white;
  margin-bottom: 10px;
`;

export const TicketCount = styled.div`
  width: 100%;
  font-size: 2rem;
  color: #999;
`;

export const RewardTokenText = styled.div`
  font-size: 3rem;
  color: #eee;
  margin-top: 30px;
`;

export const TicketBox = styled.div`
  width: 700px;
  height: 300px;
  background-color: white;
  display: flex;
  position: relative;
`;

export const TicketLeft = styled.div`
  flex: 1 1 100%;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
`;

export const NftInfoWrapper = styled.div`
  width: calc(100% - 100px);
  display: flex;
  padding: 40px 50px 40px 50px;
`;

export const CharacterTicketImage = styled.div<{ index: number }>`
  flex: 1 1 180px;
  height: 120px;
  background-image: url('/images/character_type_${(props) => props.index}.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TicketName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const TicketText1 = styled.div`
  width: 100%;
  font-size: 3rem;
  margin-left: 20px;
`;

export const TicketText2 = styled.div`
  width: 100%;
  font-size: 3rem;
  margin-left: 20px;
`;

export const PriceWrapper = styled.div`
  width: calc(100% - 100px);
  display: flex;
  justify-content: center;
  padding: 20px 50px;
  gap: 20px;
`;

export const PriceText1 = styled.div`
  display: flex;
  font-size: 2rem;
`;

export const PriceText2 = styled.div`
  display: flex;
  font-size: 2rem;
`;

export const TicketRight = styled.div`
  flex: 1 1 400px;
  background-color: #888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: gray;
  cursor: pointer;
`;

export const RequestQRWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const RequestQRTimer = styled.div`
  font-size: 1.6rem;
  color: white;
  margin-top: 15px;
`;
