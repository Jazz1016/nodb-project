import React from "react";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";

function Wallet(props) {
  return (
    <div>
      Wallet.js
      <Withdraw />
      <Deposit />
    </div>
  );
}

export default Wallet;
