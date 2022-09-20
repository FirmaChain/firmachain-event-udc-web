import React, { useState, useEffect } from 'react';

import RequestQR from '../requestQR';

import { TicketWrapper, TicketBox, CloseButton, TicketImage, QRBox, TimerText2 } from '../../styles';

interface IProps {
  t: (key: string) => string;
  isActive: boolean;
  setActiveTicket: (isActive: boolean) => void;
  characterType: number;
  signer: string;
  callbackTicket: () => void;
}

const Ticket = ({ t, isActive, setActiveTicket, characterType, signer, callbackTicket }: IProps) => {
  const [ticketName, setTicketName] = useState('');
  const [timerText, setTimerText] = useState('00:00');
  const [isRefresh, setRefresh] = useState(false);

  useEffect(() => {
    setTicketName(t(`step3CharacterTicket${characterType + 1}`));
  }, [characterType]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeTicket = () => {
    setActiveTicket(false);
  };

  const requestQRCallback = () => {
    setActiveTicket(false);
    callbackTicket();
  };

  const refreshQR = () => {
    setRefresh(true);
  };

  return (
    <TicketWrapper active={isActive}>
      <TicketBox>
        <TicketImage src={ticketName}>
          <QRBox>
            <RequestQR
              requestType='play'
              isActive={isActive}
              isRefresh={isRefresh}
              setRefresh={setRefresh}
              callback={requestQRCallback}
              signer={signer}
              nftType={characterType}
              qrSize={68}
              setTimerText={setTimerText}
            />
          </QRBox>
          <TimerText2 onClick={refreshQR}>{timerText}</TimerText2>
          <CloseButton onClick={closeTicket} src={'/images/step3/icon_close_white_32px.png'} />
        </TicketImage>
      </TicketBox>
    </TicketWrapper>
  );
};

export default React.memo(Ticket);
