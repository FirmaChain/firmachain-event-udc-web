import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Ticket from '../ticket';
import { useInterval } from '../../utils/interval';

import {
  CharacterList,
  Character,
  TicketCount,
  Step3Wrapper,
  Step3Title,
  BackgroundWrapper,
  StarState,
  HeartState,
} from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
  t: (key: string) => string;
  setLoading: (isLoading: boolean) => void;
  signer: string;
}

const Step3 = ({ isActive, setStep, t, signer }: IProps) => {
  const [ticketCount, setTicketCount] = useState([0, 0, 0]);
  const [isActiveTicket, setActiveTicket] = useState(false);
  const [characterType, setCharacterType] = useState(-1);

  useEffect(() => {
    if (isActive) {
      getNftCount().catch((error) => {
        console.log(error);
      });
    }
  }, [isActive]);

  useInterval(() => {
    if (isActive) {
      getNftCount().catch((error) => {
        console.log(error);
      });
    }
  }, 5000);

  const getNftCount = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_HOST}/event/nft`);

    if (response.data.code === 0) {
      setTicketCount(response.data.result.nftTicketCountList);
    } else {
      throw new Error('INVALID REQUEST');
    }
  };

  const onClickCharacter = (type: number) => {
    if (ticketCount[type] === 0) return;

    setCharacterType(type);
    setActiveTicket(true);
  };

  const callbackTicket = () => {
    setStep(3);
  };

  return (
    <Step3Wrapper>
      <BackgroundWrapper>
        <StarState src='/images/common/img_top_menu_star.png' />
        <HeartState src='/images/common/img_top_menu_heart.png' />
      </BackgroundWrapper>
      <Ticket
        t={t}
        isActive={isActiveTicket}
        setActiveTicket={setActiveTicket}
        characterType={characterType}
        signer={signer}
        callbackTicket={callbackTicket}
      />
      <Step3Title src={t('step3Text1')} />
      <CharacterList>
        <Character onClick={() => onClickCharacter(1)} isAvailable={ticketCount[1] > 0} src={t('step3Character2')}>
          <TicketCount>{ticketCount[1]}</TicketCount>
        </Character>

        <Character onClick={() => onClickCharacter(2)} isAvailable={ticketCount[2] > 0} src={t('step3Character3')}>
          <TicketCount>{ticketCount[2]}</TicketCount>
        </Character>

        <Character onClick={() => onClickCharacter(0)} isAvailable={ticketCount[0] > 0} src={t('step3Character1')}>
          <TicketCount>{ticketCount[0]}</TicketCount>
        </Character>
      </CharacterList>
    </Step3Wrapper>
  );
};

export default React.memo(Step3);
