const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;

const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "b8bce9ed51bf47567802a505fc3a878ba0c924273d11a4ff3d763bb0a0e62461"
);

const myWalletAddress = myKey.getPublic("hex");

let kar = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 2);
tx1.signTransaction(myKey);
kar.addTransaction(tx1);

console.log("Starting the miner...");
kar.minePendingTransactions(myWalletAddress);
console.log("Satya's balance is: ", kar.getBalanceOfAddress(myWalletAddress));

console.log("Starting the miner...");
kar.minePendingTransactions(myWalletAddress);
console.log("Satya's balance is: ", kar.getBalanceOfAddress(myWalletAddress));

console.log("Blockchain Authenticity(true/false):", kar.isChainValid());
