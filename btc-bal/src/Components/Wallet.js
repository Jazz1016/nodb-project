import React from "react";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";

function Wallet(props) {
  console.log(props.wallet.bal);
  console.log(props.wallet.bal);
  return (
    <div>
      <p>{props.wallet.coin}</p>
      <p>{props.wallet.address}</p>
      <p>{props.wallet.bal}</p>
      <Withdraw id={props.id} balMinus={props.balMinus} />
      <Deposit id={props.id} balAdd={props.balAdd} />
      <p></p>
      <button onClick={() => props.deleteWallet(props.id)}>Delete</button>
    </div>
  );
}

export default Wallet;
