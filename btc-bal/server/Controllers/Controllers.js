const user = require("../../btc_data1.json");
id = 4;

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
    if (
      coin === "ltc" ||
      "eth" ||
      "btc" ||
      "xmr" ||
      "dash" ||
      "dogecoin" ||
      "chainlink" ||
      "xsm" ||
      "xrp" ||
      "eos" ||
      "zec"
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
    } else res.status(404).send(user);
  },
  balMinus: (req, res) => {
    const { bal } = req.body;
    const updateId = req.params.id;
    const index = user.wallets.findIndex(wallet => wallet.id === updateId);
    let wallet = wallets{index}
    wallets[index] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
  },
  balAdd: (req, res) => {
    res.status(200).send(console.log("#5"));
  },
  delWallet: (req, res) => {
    res.status(200).send(console.log("#5"));
  }
};
