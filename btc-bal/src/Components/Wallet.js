import React from "react";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
import "../App.css";

function Wallet(props) {
  console.log(props.wallet.bal);
  console.log(props.wallet.bal);
  return (
    <div className="wallet">
      <p className="wallet-spacing">{props.wallet.coin}</p>
      <p className="wallet-spacing">{props.wallet.address}</p>
      <p className="wallet-spacing">{props.wallet.bal}</p>
      <Withdraw
        className="wallet-spacing"
        id={props.id}
        balMinus={props.balMinus}
      />
      <Deposit className="wallet-spacing" id={props.id} balAdd={props.balAdd} />
      <button
        className="wallet-spacing"
        onClick={() => props.deleteWallet(props.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Wallet;
