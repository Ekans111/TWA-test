import { useState } from "react";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";

function App() {
  const [ton, setTon] = useState(0);
  return (
    <>
      <div className="flex w-full relative">
        <h1 className="text-3xl text-center w-full">Telegram Mini App</h1>
        <TonConnectButton className="absolute right-0" />
      </div>
      <div className="text-2xl mt-10">
        Token count: {ton}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full cursor-pointer transition hover:scale-110 hover:opacity-50 active:opacity-80" onClick={() => setTon(ton + 1)}>
        <img src="/toncoin.svg" alt="toncoin" className="w-20 h-20" />{" "}
      </div>
    </>
  );
}

export default App;
