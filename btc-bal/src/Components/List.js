import React from "react";
import Wallet from "./Wallet";
import "../App.css";

function List(props) {
  let walletList = props.wallets.map(el => {
    return (
      <div className="list">
        <Wallet
          className="wallet"
          wallet={el}
          key={el.id}
          id={el.id}
          balAdd={props.balAdd}
          balMinus={props.balMinus}
          deleteWallet={props.deleteWallet}
        />
      </div>
    );
  });

  return (
    <main className="overflow">
      <header className="list-head1">Your wallets:</header>
      <header className="list-head">
        <h4 className="p1">coin</h4>
        <h4 className="p2">address</h4>
        <h4 className="p3">bal</h4>
      </header>
      {walletList}
    </main>
  );
}

export default List;
