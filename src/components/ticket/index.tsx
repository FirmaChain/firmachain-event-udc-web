import React from 'react';

import RequestQR from '../requestQR';

import {
  TicketWrapper,
  TicketBox,
  TicketLeft,
  NftInfoWrapper,
  CharacterTicketImage,
  TicketName,
  TicketText1,
  TicketText2,
  PriceWrapper,
  PriceText1,
  PriceText2,
  TicketRight,
  CloseButton,
} from '../../styles';

interface IProps {
  isActive: boolean;
  setActiveTicket: (isActive: boolean) => void;
  ticketName: string;
  characterType: number;
  signer: string;
  callbackTicket: () => void;
}

const Ticket = ({ isActive, setActiveTicket, ticketName, characterType, signer, callbackTicket }: IProps) => {
  const closeTicket = () => {
    setActiveTicket(false);
  };

  const requestQRCallback = () => {
    callbackTicket();
  };

  return (
    <TicketWrapper active={isActive}>
      <TicketBox>
        <CloseButton onClick={closeTicket} />
        <TicketLeft>
          <NftInfoWrapper>
            <CharacterTicketImage index={characterType} />
            <TicketName>
              <TicketText1>{ticketName}</TicketText1>
              <TicketText2>TICKET</TicketText2>
            </TicketName>
          </NftInfoWrapper>
          <PriceWrapper>
            <PriceText1>PRICE</PriceText1>
            <PriceText2>1 FCT</PriceText2>
          </PriceWrapper>
        </TicketLeft>
        <TicketRight>
          <RequestQR
            requestType='play'
            isActive={isActive}
            callback={requestQRCallback}
            signer={signer}
            nftType={characterType}
          />
        </TicketRight>
      </TicketBox>
    </TicketWrapper>
  );
};

export default React.memo(Ticket);
