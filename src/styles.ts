import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const jump = keyframes`
  0% {
    transform: translateY(100%);
  }
  5% {
    transform: translateY(0%);
  }
  55% {
    transform: translateY(0%);
  }
  60% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const jump2 = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const dungdung = keyframes`
  0% {
    transform: translateY(0%);
  }
  50%{
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(120%);
  }
  5% {
    opacity:1;
  }
  100% {
    transform: translateY(0%);
    opacity:1;
  }
`;

export const slideUpNoti = keyframes`
  0% {
    transform: translateY(120%);
  }
  5% {
    opacity:1;
  }
  30% {
    transform: translateY(-20%);
    opacity:1; 
  }
  50% {
    transform: translateY(10%);
    opacity:1; 
  }
  70% {
    transform: translateY(-10%);
    opacity:1; 
  }
  90% {
    transform: translateY(5%);
    opacity:1; 
  }
  100% {
    transform: translateY(0%);
    opacity:1;
  }
`;

export const moveCloud = keyframes`
  0% {
    left:100%;
  }
  100% {
    left:-20%;
  }
`;

export const leftToRight = keyframes`
0% {
  transform: translateX(-120%);
}
100% {
  transform: translateX(0%);
}
`;

export const starAnim = keyframes`
  0% {
    opacity:1;
    transform: scale(0.1);
  }
  50% {
    opacity:1;
    transform: scale(1);
  }
  100% {
    opacity:1;
    transform: scale(0.1);
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #5ab3f5;
  overflow: hidden;
`;

export const LoadingWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000bb;
  padding-bottom: 5px;
  z-index: 20;
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
  padding-bottom: 2px;
  background-color: #000000bb;
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

export const CommonBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackgroundMainCloud = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const TopCloundWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const TopCloud1 = styled.img`
  position: absolute;
  top: 40px;
  left: 20px;
  animation-duration: 40s;
  animation-delay: -48s;
  animation-timing-function: linear;
  animation-name: ${moveCloud};
  animation-iteration-count: infinite;
`;

export const TopCloud2 = styled.img`
  position: absolute;
  top: 120px;
  left: 700px;
  animation-duration: 70s;
  animation-delay: -45s;
  animation-timing-function: linear;
  animation-name: ${moveCloud};
  animation-iteration-count: infinite;
`;

export const TopCloud3 = styled.img`
  position: absolute;
  top: 20px;
  left: 940px;
  animation-duration: 100s;
  animation-delay: -10s;
  animation-timing-function: linear;
  animation-name: ${moveCloud};
  animation-iteration-count: infinite;
`;

export const TopCloud4 = styled.img`
  position: absolute;
  top: 160px;
  left: 220px;
  animation-duration: 40s;
  animation-delay: -30s;
  animation-timing-function: linear;
  animation-name: ${moveCloud};
  animation-iteration-count: infinite;
`;

export const TicketWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 101%;
  background-color: #000000bb;
  z-index: 14;
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
  z-index: 13;
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

export const QRWrapper = styled.div<{ src: string }>`
  width: 360px;
  height: 360px;
  position: absolute;
  top: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  & > div {
    margin-left: -6px;
    margin-top: -6px;
  }
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

export const Step1Wrapper = styled(Step)`
  align-content: stretch;
  background-red;
`;
export const Step2Wrapper = styled(Step)``;
export const Step3Wrapper = styled(Step)``;
export const Step4Wrapper = styled(Step)``;
export const Step5Wrapper = styled(Step)`
  background-color: #00000066;
`;

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const CharacterList = styled.div`
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  gap: 20px;
`;

export const Character = styled.div<{ src: string; isAvailable: boolean }>`
  width: 258px;
  height: 445px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transform: translateY(-120%);
  opacity: 0;
  background-image: url('${(props) => (props.isAvailable ? props.src : props.src.replace('.png', '_disable.png'))}');
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  filter: drop-shadow(3px 3px 4px #aaa);
  animation-delay: 0.3s;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const color = '#0000000a';
export const TicketCount = styled.div`
  font-size: 1.8rem;
  color: white;
  position: absolute;
  bottom: 31px;
  right: 55px;
  font-weight: 900;
  text-shadow: 1px 1px 0 ${color}, -1px 1px 0 ${color}, 1px -1px 0 ${color}, -1px -1px 0 ${color}, 0px 1px 0 ${color},
    0px -1px 0 ${color}, -1px 0px 0 ${color}, 1px 0px 0 ${color}, 2px 2px 0 ${color}, -2px 2px 0 ${color},
    2px -2px 0 ${color}, -2px -2px 0 ${color}, 0px 2px 0 ${color}, 0px -2px 0 ${color}, -2px 0px 0 ${color},
    2px 0px 0 ${color}, 1px 2px 0 ${color}, -1px 2px 0 ${color}, 1px -2px 0 ${color}, -1px -2px 0 ${color},
    2px 1px 0 ${color}, -2px 1px 0 ${color}, 2px -1px 0 ${color}, -2px -1px 0 ${color};
`;

export const RewardTokenText = styled.div`
  font-size: 3rem;
  color: #eee;
  margin-top: 30px;
`;

export const TicketBox = styled.div`
  display: flex;
  position: relative;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

export const RequestQRWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px;
  background-color: White;
  border-radius: 10px;
`;

export const RequestQRTimer = styled.div`
  font-size: 1.6rem;
  color: white;
  margin-top: 15px;
`;

export const BackgroundLeftCloud1 = styled.img`
  position: absolute;
  bottom: -80px;
  left: -330px;
  z-index: 6;
`;

export const BackgroundLeftCloud2 = styled.img`
  position: absolute;
  bottom: -80px;
  left: -360px;
  z-index: 7;
`;

export const BackgroundRightCloud1 = styled.img`
  position: absolute;
  bottom: -120px;
  right: -260px;
  z-index: 6;
`;

export const BackgroundRightCloud2 = styled.img`
  position: absolute;
  bottom: -120px;
  right: -280px;
  z-index: 7;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const TitleImage = styled.img`
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const TitleCoin = styled.img`
  width: 130px;
  position: absolute;
  top: calc(50% - 48px);
  left: calc(50% - 310px);
  animation-duration: 3s;
  animation-delay: 0.4s;
  animation-timing-function: linear;
  animation-name: ${dungdung};
  animation-iteration-count: infinite;
  filter: drop-shadow(2px 2px 3px #99999980);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 81px;
  bottom: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const ButtonImage = styled.img`
  width: 220px;
  height: 81px;
  filter: drop-shadow(3px 3px 4px #aaa);
`;

export const Character1 = styled.img`
  position: absolute;
  bottom: 90px;
  left: 100px;
  z-index: 6;
  transform: translateY(100%);
  animation-duration: 10s;
  animation-delay: 3s;
  animation-timing-function: ease-in-out;
  animation-name: ${jump};
  animation-iteration-count: infinite;
`;

export const Character2 = styled.img`
  position: absolute;
  bottom: 255px;
  left: 30px;
  z-index: 5;
  transform: translateY(100%);
  animation-duration: 11s;
  animation-delay: 2s;
  animation-timing-function: ease-in-out;
  animation-name: ${jump};
  animation-iteration-count: infinite;
`;

export const Character3 = styled.img`
  position: absolute;
  bottom: 130px;
  right: 50px;
  z-index: 6;
  transform: translateY(100%);
  animation-duration: 8s;
  animation-delay: 0.4s;
  animation-timing-function: ease-in-out;
  animation-name: ${jump};
  animation-iteration-count: infinite;
`;

export const TokenImage = styled.img`
  position: absolute;
  top: 115px;
  right: 120px;
  z-index: 9;
  animation-duration: 3s;
  animation-delay: 0.4s;
  animation-timing-function: linear;
  animation-name: ${dungdung};
  animation-iteration-count: infinite;
`;

export const Step3Title = styled.img`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const StarState = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const HeartState = styled.img`
  position: absolute;
  top: 20px;
  left: 172px;
`;

export const TicketImage = styled.div<{ src: string }>`
  width: 799px;
  height: 356px;
  transform: translateX(120%);
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation-duration: 0.4s;
  animation-delay: 0.3s;
  animation-timing-function: ease-in;
  animation-name: ${leftToRight};
  animation-fill-mode: forwards;
`;

export const QRBox = styled.div`
  width: 88px;
  position: absolute;
  top: 77px;
  right: 103px;
  & > div {
    padding: 10px;
  }
`;

export const Step2TextWrapper = styled.div`
  position: absolute;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Step2TitleText = styled.img``;
export const Step2SubText = styled.img``;
export const TimerTextBox = styled.div<{ src: string }>`
  position: absolute;
  top: 630px;
  width: 205px;
  height: 47px;
  background-image: url('${(props) => props.src}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 19;
`;

export const TimerText = styled.div`
  font-size: 28px;
  line-height: 47px;
  color: white;
  font-weight: 600;
  margin-right: 30px;
`;

export const TimerText2 = styled.div`
  font-size: 13px;
  color: white;
  font-weight: 600;
  position: absolute;
  top: 184px;
  right: 122px;
  padding: 10px 15px;
`;

export const BackgroundStep2LeftCloud1 = styled.img`
  position: absolute;
  bottom: -150px;
  left: -270px;
  z-index: 6;
`;

export const BackgroundStep2RightCloud1 = styled.img`
  position: absolute;
  bottom: -180px;
  right: -280px;
  z-index: 6;
`;

export const Step2Character1 = styled.img`
  position: absolute;
  z-index: 5;
  left: 100px;
  bottom: 180px;
  transform: translateY(100%);
  animation-duration: 0.9s;
  animation-timing-function: ease-in;
  animation-name: ${jump2};
  animation-fill-mode: forwards;
`;

export const Step2Character2 = styled.img`
  position: absolute;
  z-index: 5;
  right: 80px;
  bottom: 120px;
  transform: translateY(100%);
  animation-duration: 0.9s;
  animation-delay: 0.4s;
  animation-timing-function: ease-in;
  animation-name: ${jump2};
  animation-fill-mode: forwards;
`;

export const Step2Character1Star = styled.img`
  position: absolute;
  z-index: 7;
  left: 270px;
  bottom: 350px;
  opacity: 0;
  animation-delay: 1.2s;
  animation-duration: 1s;
  animation-name: ${starAnim};
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;

export const leftStarAnim = keyframes`
  0% {
    right:40%;
    transform: scale(0);
  }
  100% {
    right:calc(50% + 130px);
    transform: scale(1);
  }
`;

export const rightStarAnim = keyframes`
  0% {
    left:40%;
    transform: scale(0);
  }
  100% {
    left:calc(50% + 140px);
    transform: scale(1);
  }
`;

export const rewardBackAnim = keyframes`
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const rewardContentAnim = keyframes`
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const rotate = keyframes`
  1% {
    opacity:1;
  }
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    opacity:1;
  }
`;

export const RewardEffectBreadpare = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -710px;
  margin-top: -765px;
  opacity: 0;
  animation-delay: 0.3s;
  animation-duration: 40s;
  animation-name: ${rotate};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const RewardEffectLeftStar = styled.img`
  position: absolute;
  top: 40px;
  right: calc(50% + 100px);
  transform: scale(0);
  animation-duration: 0.3s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
  animation-name: ${leftStarAnim};
  animation-fill-mode: forwards;
`;

export const RewardEffectRightStar = styled.img`
  position: absolute;
  top: 30px;
  left: calc(50% + 100px);
  transform: scale(0);
  animation-duration: 0.3s;
  animation-delay: 0s;
  animation-timing-function: ease-in;
  animation-name: ${rightStarAnim};
  animation-fill-mode: forwards;
`;

export const RewardBackground = styled.img`
  position: absolute;
  top: 55%;
  left: 50%;
  //650 540
  margin-left: -325px;
  margin-top: -270px;
  animation-duration: 0.2s;
  animation-timing-function: ease-in;
  animation-name: ${rewardBackAnim};
  animation-fill-mode: forwards;
`;

export const RewardContents = styled.div`
  width: 800px;
  height: 618px;
  position: relative;
  animation-duration: 0.2s;
  animation-timing-function: ease-in;
  animation-name: ${rewardContentAnim};
  animation-fill-mode: forwards;
`;

export const RewardTitle = styled.img`
  position: absolute;
  bottom: 438px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const QRDiv = styled.div`
  position: absolute;
  top: 286px;
  left: calc(50% - 3px);
  transform: translate(-50%, 0);
`;

export const TimerText3 = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 900;
  position: absolute;
  left: calc(50% - 12px);
  top: 437px;
  transform: translate(-50%, 0);
  padding: 10px 40px;
`;

export const TokenRewardWrapper = styled.div`
  position: absolute;
  top: 175px;
  left: calc(50%);
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const TokenAmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const TokenIcon = styled.img`
  margin-right: 10px;
`;

export const NumberImg = styled.img`
  margin: 0 -2px;
  width: auto;
  height: auto;
  max-height: 57px;
`;

export const CommaImg = styled.img`
  margin-top: 30px;
  margin-left: -5px;
  margin-right: -5px;
  max-height: 57px;
`;

export const SymbolImg = styled.img`
  margin-left: 10px;
  max-height: 57px;
`;

export const NftNotification = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #333;
  opacity: 0.85;
  border-radius: 10px;
  width: 180px;
  z-index: 99;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px 10px;
  gap: 20px;
  flex-direction: column;
  transform: translateY(120%);
  animation-delay: 1.2s;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${slideUpNoti};
  animation-fill-mode: forwards;
`;

export const NftImage = styled.img`
  width: 150px;
  height: 150px;
`;
export const NftName = styled.div`
  font-size: 1.8rem;
  line-height: 24px;
  color: white;
`;
