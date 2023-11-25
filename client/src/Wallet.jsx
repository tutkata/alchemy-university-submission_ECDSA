import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { toHex } from "ethereum-cryptography/utils";


function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey, newRandomKey, setNewRandomKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = "0x" + toHex(secp256k1.getPublicKey(privateKey)).slice(-40);
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  async function generatePrivateKey() {
    const { data: { privateKey: newRandomKey } } = await server.post('generatePrivateKey');
    setNewRandomKey(newRandomKey); // Set the new random key in state
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type in your private key, NFA DYOR" value={privateKey} onChange={onChange}></input>
      </label>
      <div>
        Address: {address}
      </div>
      <div className="balance">Balance: {balance}</div>

      <input type="submit" className="button" value="privateKey" onClick={generatePrivateKey} />
      {
        newRandomKey ?
          <div className="New private key">New Private Key generated: {newRandomKey}</div> : ""
      }
    </div>


  );
}

export default Wallet;
