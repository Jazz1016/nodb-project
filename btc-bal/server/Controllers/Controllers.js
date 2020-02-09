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
    const coinArr = [
      "ltc",
      "eth",
      "btc",
      "xmr",
      "dash",
      "doge",
      "chc",
      "xsn",
      "xrp",
      "eos",
      "zec"
    ];
    let r = Math.random()
      .toString(36)
      .substring(6);
    let a = Math.random(36)
      .toString(36)
      .substring(6);
    let n = Math.random(36)
      .toString(36)
      .substring(6);
    let d = Math.random(36)
      .toString(36)
      .substring(6);
    let o = Math.random(36)
      .toString(36)
      .substring(6);
    let m = Math.random(36)
      .toString(36)
      .substring(6);

    if (coinArr.includes(coin)) {
      id++;
      const newWallet = {
        id: id,
        coin: coin,
        address: `1${r}${a}${n}${d}${o}${m}`,
        bal: bal
      };
      user.wallets.push(newWallet);
      res.status(200).send(user);
    } else res.sendStatus(404);
  },
  balMinus: (req, res) => {
    // console.log(req.body);
    const { id } = req.params;
    const index = user.wallets.findIndex(wallet => wallet.id === +id);
    const { bal } = req.body;
    // console.log(user.wallets[index]);
    if (typeof +bal === "number") {
      console.log(bal);
      user.wallets[index] = {
        id: user.wallets[index].id,
        coin: user.wallets[index].coin,
        address: user.wallets[index].address,
        bal: user.wallets[index].bal - +bal
      };
      res.status(200).send(user);
    } else res.sendStatus(500);
    // console.log(user);
  },
  balAdd: (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    const { id } = req.params;
    const index = user.wallets.findIndex(wallet => wallet.id === +id);
    const { bal } = req.body;
    if (typeof +bal === "number") {
      console.log(bal);
      user.wallets[index] = {
        id: user.wallets[index].id,
        coin: user.wallets[index].coin,
        address: user.wallets[index].address,
        bal: user.wallets[index].bal + +bal
      };
      // console.log(user);
      res.status(200).send(user);
    } else res.sendStatus(500);
  },
  delWallet: (req, res) => {
    const { id } = req.params;
    const index = user.wallets.findIndex(wallet => wallet.id === +id);
    user.wallets.splice(index, 1);
    res.status(200).send(user);
  }
};
