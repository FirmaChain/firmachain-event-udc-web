import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

import { useInterval } from '../../utils/interval';

import { RequestQRWrapper, RequestQRTimer } from '../../styles';

interface IProps {
  requestType: string;
  signer?: string;
  nftType?: number;
  isActive: boolean;
  callback: (result: any) => void;
}

const RequestQR = ({ requestType, signer = '', nftType = -1, isActive, callback }: IProps) => {
  const [requestKey, setRequestKey] = useState('');
  const [timerText, setTimerText] = useState('00:00');
  const [expireDate, setExpireDate] = useState<Date | null>(null);
  const [timerFinish, setTimerFinish] = useState(false);

  useEffect(() => {
    if (isActive) {
      generateRequest()
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const generateRequest = async () => {
    try {
      const response = await axios.post(`/event/sign/${requestType}`, { signer, nftType });
      if (response.data.code !== 0) {
        throw new Error('INVALID REQUEST');
      }

      const expire = new Date();
      expire.setMinutes(expire.getMinutes() + 2);
      setExpireDate(expire);

      setTimerFinish(false);
      setRequestKey(response.data.result.requestKey);
      console.log(`sign://${response.data.result.requestKey}`);
    } catch (error) {
      throw error;
    }
  };

  const getRequestStatus = async (requestKey: string) => {
    try {
      const response = await axios.get(`/event/requests/${requestKey}`);

      if (response.data.code !== 0) {
        throw new Error('INVALID REQUEST');
      }
      return response.data.result;
    } catch (error) {
      throw error;
    }
  };

  const timerTick = () => {
    getRequestStatus(requestKey)
      .then((result) => {
        if (result.status < 0) {
          expiredAction();
          setTimerFinish(true);
        } else {
          if (result.status === 1) {
            setTimerFinish(true);
            requestFinishAction(result);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const requestFinishAction = (result: any) => {
    callback(result);
  };

  const expiredAction = () => {
    generateRequest().catch((error) => {
      console.log(error);
    });
  };

  useInterval(() => {
    if (expireDate === null) return;
    if (timerFinish === true) return;

    timerTick();

    const now = new Date();
    const diff = expireDate.getTime() - now.getTime();

    if (diff < 0) {
      setTimerFinish(true);
      expiredAction();
      return;
    }

    let diffMin = Math.floor((diff / (1000 * 60)) % 60);
    let diffSec = Math.floor((diff / 1000) % 60);

    diffMin = diffMin === -1 ? 0 : diffMin;
    diffSec = diffSec === -1 ? 0 : diffSec;

    setTimerText(`${('00' + diffMin).slice(-2)}:${('00' + diffSec).slice(-2)}`);
  }, 800);

  return (
    <RequestQRWrapper>
      <QRCode value={`sign://${requestKey}`} />
      <RequestQRTimer>{timerText}</RequestQRTimer>
    </RequestQRWrapper>
  );
};

export default React.memo(RequestQR);
