import React from "react";
import Wallet from "./Wallet";

function List(props) {
  // console.log(props.wallets);
  let walletList = props.wallets.map(el => {
    return (
      <Wallet
        wallet={el}
        key={el.id}
        id={el.id}
        balAdd={props.balAdd}
        balMinus={props.balMinus}
        deleteWallet={props.deleteWallet}
      />
    );
  });

  return <main>{walletList}</main>;
}

export default List;
