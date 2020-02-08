const user = require("../../btc_data1.json");
id = 5;

module.exports = {
  getUserInfo: (req, res) => {
    res.status(200).send(user);
  },
  editName: (req, res) => {
    const { name } = req.body;
    user.name = name;
    res.status(200).send(user);
  },
  addWallet: (req, res) => {
    const { coin, bal } = req.body;
    console.log(coin);
    if (
      coin === "ltc" ||
      coin === "eth" ||
      coin === "btc" ||
      coin === "xmr" ||
      coin === "dash" ||
      coin === "dogecoin" ||
      coin === "chainlink" ||
      coin === "xsn" ||
      coin === "xrp" ||
      coin === "eos" ||
      coin === "zec"
    ) {
      id++;
      const newWallet = {
        id: id,
        coin: coin,
        address: "123425",
        bal: bal
      };
      user.wallets.push(newWallet);
      res.status(200).send(user);
    } else res.sendStatus(404);
  },
  balMinus: (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const index = user.wallets.findIndex(wallet => wallet.id === +id);
    const { bal } = req.body;
    // console.log(user.wallets[index]);
    user.wallets[index] = {
      id: user.wallets[index].id,
      coin: user.wallets[index].coin,
      address: user.wallets[index].address,
      bal: user.wallets[index].bal - +bal
    };
    console.log(user);
    res.status(200).send(user);
  },
  balAdd: (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    const { id } = req.params;
    const index = user.wallets.findIndex(wallet => wallet.id === +id);
    const { bal } = req.body;
    user.wallets[index] = {
      id: user.wallets[index].id,
      coin: user.wallets[index].coin,
      address: user.wallets[index].address,
      bal: user.wallets[index].bal + +bal
    };
    console.log(user);
    res.status(200).send(user);
  },
  delWallet: (req, res) => {
    const { id } = req.params;
    const index = user.wallets.findIndex(wallet => wallet.id === +id);
    user.wallets.splice(index, 1);
    res.status(200).send(user);
  }
};
