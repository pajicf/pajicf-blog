---
title: Developer's intro to zkEVMs
date: 2023-01-09 02:00
tags:
- scroll
- layer2
- zkp
description: Lately there’s been a lot of buzzing around emerging Layer2’s as the zkEVM space started to mature and optimistic rollups got more attention. All of a sudden, It seems that decentralization is again the way to go and that we’ll see another wave of competition, just this time it’s going to be between rollup solutions.
---

Since the beginning of Ethereum, there was always a vision of scaling the blockchain up and making it capable of achieving **much greater transaction output and speed.**

That was especially true after the DeFi summer when Ethereum **gas prices** skyrocketed and a lot of other Layer 1 solutions came up promising exactly that.<br/>
There was a power vacuum that emerged from this but the [Layer 2](https://www.investopedia.com/terms/l/level2.asp) solutions, Ethereum [PoS](https://www.investopedia.com/terms/p/proof-stake-pos.asp) and Ethereum [sharding](https://www.investopedia.com/terms/s/sharding.asp) still weren’t there.<br/>
Because of that, chains such as Polygon, Avalanche, Gnosis, Fantom, Solana, Near and many others took the opportunity and created Layer 1s which had to [sacrifice](https://www.ledger.com/academy/what-is-the-blockchain-trilemma) decentralization to deliver the promises.

![vitalik](/media/scroll-layer2-nft-and-multisig-deployment/vitalik.png "Vitalik Ethereum 2")
<br/>

Lately there’s been a lot of buzzing around emerging Layer2’s as the [zkEVM](https://www.alchemy.com/overviews/zkevm) space started to mature and [optimistic rollups](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/) got more attention.<br/>
All of a sudden, It seems that decentralization is again the way to go and that we’ll see another wave of competition, just this time it’s going to be **between rollup solutions**.

## What are Layer 2s?

The term refers to solutions that execute blockchain transactions off the chain and compress many times more in a single transaction that is settled on Ethereum (Layer 1), hence keeping the original security and decentralization while scaling its original L1.

### What types are there?
There are many unique approaches to these solutions, but the primary ones are Optimistic Rollups and ZK Rollups (Validity proof Rollups).<br/>
There’s a lot to cover here, but for this post, we’ll focus on ZK rollups, more precisely on the solutions that solve EVM execution through zero-knowledge proofs or even more precisely: zkEVMs.

![arms-wrestling](/media/scroll-layer2-nft-and-multisig-deployment/arms-wrestling.jpeg "Arms wrestling")
<br/>

## zkEVM differences

Not all zkEVMs are created equal. There’s a subdivision here as well.<br/>
The primary way we can look at it is through the lens of how easy it is for **existing code to be deployed** as well as how useful existing infrastructures and **developer tooling** are.
<br/><br/>
In relation to EVM, we can create two divisions here:
1. **Language compatible solutions**
2. **Bytecode compatible solutions**
3. **Consensus level solutions**
<br/>

![messari-comparison](/media/scroll-layer2-nft-and-multisig-deployment/messari-comparison.jpeg "Messari zkEVM overview")
_source: [Messari.io](https://twitter.com/MessariCrypto/status/1558241955502440450)_

### Language compatible solutions
These solutions aim to transpile existing Ethereum smart contract languages to their own bytecode compatible to run on their ZK Virtual Machines.<br/>
The primary players here are MatterLab’s **zkSync** and Starkware’s **StarkNet**

### Bytecode compatible solutions
These solutions aim to interpret EVM bytecode directly, either by translating it to its own VM bytecode (**Polygon zkEVM**) or by running it directly (**Scroll**).<br/>
Although the former is a good approach from the safety side (maybe some opcodes can’t map properly to zero-knowledge friendly VM) the latter is definitely **superior** in terms of developer experience.

### Scroll
And finally to come to the product you’re probably here for, [Scroll](https://scroll.io/).<br/>
As per the words of the builders themselves, Scroll is _“zkEVM-based zkRollup on Ethereum that enables native compatibility for existing Ethereum applications and tools.”_
<br/><br/>
One of the main principles of Scroll is “EVM Equivalence”. Their main claim is that any existing smart contract can be deployed effortlessly on their network due to the equivalency of the underlying zero-knowledge VM to Ethereum’s VM.
<br/><br/>
![scroll-logo](/media/scroll-layer2-nft-and-multisig-deployment/scroll-logo.png "Scroll logo")
<br/>

## Testing the thesis
I wanted to test this thesis, hence this blog post.<br/>
**How will I do this?**
- I’ll take **less popular** developer tooling to see if it works and to make sure there wasn’t any hard-coded patch made for popular tooling such as [Hardhat](https://hardhat.org/)
- I’ll write one smart contract in Solidity and the other in Vyper to make test **bytecode compatibility** instead of the usual “Solidity” compatibility. 

### Let’s make an NFT through a custom multisig
#### Initializing the brownie project
The primary thing to note here are:
- `contracts` folder - This is where our NFT and Multisig contracts are located
- `tests` folder - This is where the unit tests are to make sure everything works as expected
- `scripts` folder - Scripts which we’ll later use to interact with the Scrolls L2 network.

![project_screenshot](/media/scroll-layer2-nft-and-multisig-deployment/project_screenshot.png "Project overview")
_The project structure_

<br/>

#### Creating the Smart Contracts
Now we’ll create two smart contracts.<br/>
One that will manage the [NFT](https://www.investopedia.com/non-fungible-tokens-nft-5115211) logic, minting, ownership etc.<br/>
This smart contract will be called [TheNFT.sol](https://github.com/pajicf/scroll-multisig-and-nft/blob/main/contracts/TheNFT.sol) and is going to be written in Solidity.

The other one will be responsible for managing [Multisig](https://www.coindesk.com/learn/what-is-a-multisig-wallet/) logic. We’ll be able to create on-chain smart contract execution proposals, vote for them and finally, execute them.<br/>
This smart contract will be called [Supersig.vy](https://github.com/pajicf/scroll-multisig-and-nft/blob/main/contracts/Supersig.vy)

You can check the full code base of the project on my [github](https://github.com/pajicf/scroll-multisig-and-nft).

![contract_files_screenshot](/media/scroll-layer2-nft-and-multisig-deployment/contract_files_screenshot.png "Contracts overview")

<br/>

#### Deploying the actual contracts to Scroll
Scroll started opening up its network to the public this summer (2022). Initially, it was a gated alpha where as of now, everyone can use it and try it out, including you and me as well.

We’ll start by running the `deploy.py` script which will deploy new instances of our smart contracts and return us the addresses.

![nft_deployed](/media/scroll-layer2-nft-and-multisig-deployment/nft_deployed.png "NFT deployed")<br/>
![supersig_deployed](/media/scroll-layer2-nft-and-multisig-deployment/supersig_deployed.png "Contracts overview")

As we can see, the contracts were successfully deployed. We can find them by typing those into [Scroll’s Block Explorer](https://blockscout.scroll.io/) search bar in the top right corner.

**TheNFT.sol:** [Link to contract on L2](https://blockscout.scroll.io/address/0x2b755B2D78156215Ac9dA3b2E09eB674B1493C92)<br/>
**Supersig.vy:** [Link to contract on L2](https://blockscout.scroll.io/address/0x6fD91afc1C7dCB72387da9a4A6B3108C6538CF85)

It seems that contracts are easily deployed, so no problem with developer tooling, even the non-mainstream ones.<br/>
That makes one of the statements true, developer tooling does work out of the box. ✅

### Interacting with the smart contracts
Now it’s time to interact with our contracts, we have two scripts prepared for this part.<br/>
**Let’s get our hands dirty.**

`transfer_ownership.py`<br/>
This one will prepare our NFT smart contract to be used by the multisig that we deployed earlier by giving it ownership rights. When we run it we get the output below:<br/><br/>
![transfer_ownership_script](/media/scroll-layer2-nft-and-multisig-deployment/transfer_ownership_script.png "Transfer ownership script")
Brownie is telling us that the transfer ownership was confirmed and we can commence minting our NFT.

`multisig_script.py`<br/>
Now, we will go through the whole flow of proposing a minting transaction to executing it and finally giving us our very own NFT on Scroll.
![multisig_script](/media/scroll-layer2-nft-and-multisig-deployment/multisig_script.png "Multisig script")

Let’s break this down:
1. First, we propose NFT minting by calling the `propose()` function inside our contract
2. Second, we as one of the participants of this multisig approve the proposal. And because we’ve set the threshold to just 1, this one approval will be enough to be able to commence to the next and final step.
3. Finally, we execute it. We can check out the whole transaction in the block explorer by typing the tx hash into the search bar. Or more easily, just by pressing [this](https://l2scan.scroll.io/tx/0x5902d0b33b571bcca396dcf462d4880eb0aa93088fd40e41c31dfc9792e0005e) link.
![multisig_tx](/media/scroll-layer2-nft-and-multisig-deployment/multisig_tx.png "Multisig tx")

And voila, our NFT was minted successfully. Hence the second statement is true as well, the network is bytecode compatible with any language that gets compiled to the EVM bytecode. ✅

## The future
Although the race is getting hot, and this is a topic of interest of many right now, there still isn’t a solution that provides a full **consensus-level solution** that can be replaced inside Ethereum itself. Scroll is possibly the closest protocol right now aspiring to this goal and I’m very excited about the future of the ecosystem.

[@pseudotheos](https://twitter.com/pseudotheos) wrote a good blog post regarding the breakdown of the current zkEVM space, you can read the post [here](https://pseudotheos.mirror.xyz/b_696drhG1k6Nc89RHBHFuoC0IF6g88q-fjJw9dDbKQ). It’s on us to research more and develop a truly decentralized solution worthy of scaling Ethereum and reaching out to more users.

There’s a lot to digest here, so get to work anon!

## Resources
[GitHub Repository](https://github.com/pajicf/scroll-multisig-and-nft) of the Project used