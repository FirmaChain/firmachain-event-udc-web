import { useState, useEffect } from 'react';

import './default.css';
import Loading from './components/loading';
import Main from './pages/main';

const App = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const preload = (imageArray: string[], index = 0) => {
      index = index || 0;
      if (imageArray && imageArray.length > index) {
        const img = new Image();
        img.onload = () => {
          preload(imageArray, index + 1);
        };
        img.src = imageArray[index];
      }
    };

    preload([
      '/images/step3/Card_DODO.png',
      '/images/step3/Card_DORY.png',
      '/images/step3/Card_DOYLE.png',
      '/images/step3/Ticket_DODO.png',
      '/images/step3/Ticket_DORY.png',
      '/images/step3/Ticket_DOYLE.png',
    ]);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Main setLoading={setLoading} />
    </>
  );
};

export default App;
