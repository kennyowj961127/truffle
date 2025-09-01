
# Godzilla NFT Smart Contract: Truffle Console Commands

This guide walks you through interacting with your deployed Godzilla NFT contract using Truffle Console and Web3.

## 1. Open Truffle Console
Start the Truffle console and connect to your Ganache network:

```bash
truffle console --network ganache
```

## 2. Get Accounts
Fetch the list of available accounts:

```js
web3.eth.getAccounts()
```

## 3. Get Deployed Contract Instance
Get the deployed Godzilla contract instance:

```js
const godzillaInstance = await Godzilla.deployed()
```

## 4. Read Contract Name
Check the name of your NFT collection:

```js
godzillaInstance.name()
```

## 5. Store Accounts in a Variable
Store the accounts array for easier access:

```js
const accounts = await web3.eth.getAccounts()
```

## 6. Mint a New NFT
Mint a new Godzilla NFT to the second account, with metadata file `godzilla.json`:

```js
await godzillaInstance.safeMint(accounts[1], "godzilla.json")
```

## 7. Check NFT Ownership
Verify the owner of token ID 0:

```js
godzillaInstance.ownerOf(0)
```

## 8. Show Recipient Address
Display the address that received the NFT:

```js
accounts[1]
```

## 9. Get Token Metadata URI
Retrieve the metadata URI for token ID 0:

```js
godzillaInstance.tokenURI(0)
```

---
**Tip:** You can repeat the minting and querying steps for other accounts and token IDs as needed.