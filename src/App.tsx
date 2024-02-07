import React, { useState, useEffect } from 'react';
import useAeternitySDK from './hooks/useAeternitySDK';
import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk';

import Connect from './components/Connect.js';

function App() {
  const { aeSdk, address, networkId, connectToWallet } = useAeternitySDK();
  const [balance, setBalance] = useState("");

  useEffect(() => {
    console.log("hlo");
    (async () =>{
      try {
        	await connectToWallet();
        			
        		} catch (error) {
        			if (!(error instanceof Error)) throw error;
        			
        		} finally {
        			
        		}
    })();
  },[connectToWallet]);

  useEffect(() => {
    const fetchBalance = async () => {
      if (networkId == null || address == null) return;

      try {
        const updatedbalance = await aeSdk.getBalance(address, { format: AE_AMOUNT_FORMATS.AE });

        setBalance(updatedbalance);
      } catch (error) {
        if (!(error instanceof Error)) throw error;
      }
    };
    fetchBalance();
  }, [aeSdk, networkId, address]);

  return (
    <>
      <main className='bg-slate-300/20 '>
        <Connect instance={aeSdk} balance={balance} address={address} />
      </main>
    </>
  );
}

export default App;