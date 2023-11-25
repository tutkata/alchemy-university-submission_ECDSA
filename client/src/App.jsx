import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [newRandomKey, setNewRandomKey] = useState('');



  return (
    <div className="app">
      <Wallet
        balance={balance}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        newRandomKey={newRandomKey}
        setNewRandomKey={setNewRandomKey}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
