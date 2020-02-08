const express = require("express");
const cors = require("cors");
const ctrl = require("./Controllers/Controllers");

const app = express();
const port = 3069;

app.use(express.json());
app.use(cors());

app.get(`/api/user`, ctrl.getUserInfo);
app.put(`/api/user`, ctrl.editName);
app.post(`/api/user/wallet`, ctrl.addWallet);
app.put(`/api/user/wallet/minus/:id`, ctrl.balMinus);
app.put(`/api/user/wallet/add/:id`, ctrl.balAdd);
app.delete(`/api/user/wallet/:id`, ctrl.delWallet);

app.listen(port, () => console.log(`Server running on port: ${port}`));
