const express = require('express');
const Web3Module = require('web3');
const Web3 = Web3Module.default || Web3Module;
const app = express();
const PORT = 5000;

// Connect to Ethereum via Infura (replace with your actual key)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');

app.get('/', (req, res) => {
  res.send('Hello from Backend API 👋');
});

// New route to fetch Ethereum Block Number
app.get('/block', async (req, res) => {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    res.send(`Latest Ethereum Block Number: ${blockNumber}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching Ethereum block');
  }
});

app.listen(PORT, () => console.log(`Backend API running at http://localhost:${PORT}`));
