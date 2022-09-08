import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Ticket from '../ticket';
import { useInterval } from '../../utils/interval';

import {
  TitleText,
  CharacterList,
  Character,
  CharacterImage,
  CharacterName,
  CharacterDescription,
  TicketCount,
  Step3Wrapper,
} from '../../styles';

interface IProps {
  isActive: boolean;
  setStep: (step: number) => void;
  t: (key: string) => string;
  setLoading: (isLoading: boolean) => void;
  signer: string;
}

const Step3 = ({ isActive, setStep, t, setLoading, signer }: IProps) => {
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
    const response = await axios.get(`/event/nft`);

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
      <Ticket
        isActive={isActiveTicket}
        setActiveTicket={setActiveTicket}
        ticketName={t(`step3Character${characterType + 1}Name`)}
        characterType={characterType}
        signer={signer}
        callbackTicket={callbackTicket}
      />
      <TitleText>{t('step3Text1')}</TitleText>
      <CharacterList>
        <Character onClick={() => onClickCharacter(0)} isAvailable={ticketCount[0] > 0}>
          <CharacterImage index={0} />
          <CharacterName>{t('step3Character1Name')}</CharacterName>
          <CharacterDescription>{t('step3Character1Desc')}</CharacterDescription>
          <TicketCount>
            {t('step3RemainingText')} : {ticketCount[0]}
            {t('step3CountText')}
          </TicketCount>
        </Character>
        <Character onClick={() => onClickCharacter(1)} isAvailable={ticketCount[1] > 0}>
          <CharacterImage index={1} />
          <CharacterName>{t('step3Character2Name')}</CharacterName>
          <CharacterDescription>{t('step3Character2Desc')}</CharacterDescription>
          <TicketCount>
            {t('step3RemainingText')} : {ticketCount[1]}
            {t('step3CountText')}
          </TicketCount>
        </Character>
        <Character onClick={() => onClickCharacter(2)} isAvailable={ticketCount[2] > 0}>
          <CharacterImage index={2} />
          <CharacterName>{t('step3Character3Name')}</CharacterName>
          <CharacterDescription>{t('step3Character3Desc')}</CharacterDescription>
          <TicketCount>
            {t('step3RemainingText')} : {ticketCount[2]}
            {t('step3CountText')}
          </TicketCount>
        </Character>
      </CharacterList>
    </Step3Wrapper>
  );
};

export default React.memo(Step3);
