---
title: From Simple Primitives to Complex DeFi Strategy?
date: 2022-04-06 16:00
tags:
- strategy
- tesseract
- defi
description: How is one DeFi strategy built? We explore what primitives are needed to build up a Yield Aggregator
---

Diving into DeFi can be very exciting. It’s a very fast-moving environment with new yield sources being created all the time. This is especially observable compared to TradFi, where stuff moves very slowly and innovation takes more time. But because of transparency and how blockchains work architecturally, the DeFi strategy can be an even more powerful asset if you’re wearing a technical hat.

## Programmable money
One of the most important things that were introduced with [web3](https://en.wikipedia.org/wiki/Web3) are [smart contracts](https://www.investopedia.com/terms/s/smart-contracts.asp). _Smart contracts are simply **pieces of code** executed on a decentralized computer in a **trustless** way._ 

Although a very dull and simple way of describing them, I want you to take two things from this:
- **Lego bricks** – Smart contracts are pieces of software on a decentralized machine that everybody can use. This means we can take advantage of their composability and create more complex and efficient systems with just a few “primitive” ones.
- **Code is a law** – No one can censor or modify what a smart contract will do once it’s on the chain. A transaction will either revert or not based on the conditions that your transaction fulfilled all “requirements” written in the code.

## Flash Loans

Considering these two attributes above, DeFi introduced a powerful and innovative mechanic to the user’s tool belt.

[Flash loans](https://docs.aave.com/faq/flash-loans) are basically unsecured loans that will have to be repaid with interest by the end of the transaction. Thinking in the sense of TradFi, you would intuitively think of only one transaction not being enough for this to be useful. Still, the **Lego bricks** concept allows us to create complex operations executed in a single transaction.

Because in web3 **code is a law**, if the flash loan mechanic is implemented correctly, it won’t allow someone to take the money from the protocol and runoff. In other words, we can be sure that that money will be repaid and given to someone without any collateral or any additional check whatsoever.
<br/><br/>![flash-loans](/media/from-simple-primitives-to-complex-defi-strategy/flash-loans.png "Connect wallet to AAVE")<br/>
_Source: [FLASH LOANS Explained (Aave, dYdX)](https://www.youtube.com/watch?v=mCJUhnXQ76s&t=518s)_

## Evolution of DEXs
When [Ethereum](https://ethereum.org/en/) launched in 2014, people immediately saw the opportunity of improving our financial system with more efficient mechanics.

As with most innovations, a project can’t start as a Ferrari. We first need to build a Ford and then reiterate and improve for more efficiency, reliability and functionality.

## Order book model
To start off, we (the people) copied an existing working system and put it on-chain. So we created a system following the [CLOB](https://www.babypips.com/forexpedia/clob) design (Central limit order book).
- Orders happened on-chain
- Actual peers had to identify orders they were willing to take
- Execution of those orders happened on chain
- This initial model is very expensive in terms of gas and also very inefficient as they require someone on the other side to match them.
<br/><br/>![dex-comparisons](/media/from-simple-primitives-to-complex-defi-strategy/dex-comparisons.png "Connect wallet to AAVE")<br/>

The next iterations were in making orders and executions happen off-chain to spend less [gas](https://www.investopedia.com/terms/g/gas-ethereum.asp), but there still was a bottleneck in the user’s matching. This is a problem if we are trying to build another protocol on top of these DEXs.

## Here come the AMMs
For a protocol to truly strive from the perspective of a blockchain developer, it first needs to allow the ability for it to be automatized. Also, it needs to enable composability, so other more smart people can build on top of it. That’s what we developers do – **we make stuff more efficient**.

Then [Uniswap](https://uniswap.org/) came. We concluded the Order book model was too slow and expensive, so why not remove it altogether?

This architecture of an [AMM](https://coinmarketcap.com/alexandria/glossary/automated-market-maker-amm) allowed Uniswap to achieve amazing growth. Permissionless, “always-on” liquidity allowed other **developers** to build on top of it and let the creation of much more complex financial systems and the boom of DeFi summer very soon.

## Bots
As systems became more developer-friendly, that meant certain operations could be automated.

For example, it keeps the asset prices on [DEXs](https://www.coindesk.com/learn/what-is-a-dex-how-decentralized-crypto-exchanges-work/), the same as on the open market by arbitraging and automating this whole process with bots that will do that for you and earn money.

An even more powerful mechanic is that you didn’t have to own any capital at the start. You just needed your brain, and you could leverage mechanisms such as **Flash Loans** to fund your operations. In other words, finance was democratized to everybody instead of just the wealthy elite.

## Yield Farming
Here comes the fun part. The ecosystem grew day by day, and protocols that already existed were improving toward the more efficient philosophy we talked about above.

Lending and borrowing protocols became more efficient and useful to regular users as. Protocols now had competitors with whom they battled for liquidity. Thus each is improving their own protocols and making everything better for us users.

The market grew, thus the total capital and it was becoming harder and harder to keep up with all the opportunities.

You could hardly keep up with what was happening and even more so **as a developer** to automate the whole process for other protocols which envisioned a different way of doing things.

It was hard to keep track of all your positions, if something won’t get liquidated, if your infrastructure was working properly, was stuff getting compounded, etc.

## Yearn Finance
_And people said, let there be an automated yield aggregator, and thus automated yield aggregator was._
<br/><br/>![yearn-banner](/media/from-simple-primitives-to-complex-defi-strategy/yearn-banner.jpeg "Connect wallet to AAVE")<br/>
Yearn abstracted all of the problems above, taking care of possible opportunities, taking care of the infrastructure, and ensuring that assets are safe. They are giving the User a very simple gateway into DeFi in just depositing the asset you want your interest to be made in.

A good comparison in the physical world would be a car. A car is a very complicated piece of machinery. All the parts working together in cohesion to take us from one place to the other efficiently is an amazing achievement of engineering and humanity.

We don’t think too much about it exactly because of how simple it is from the User’s point of view. The same is with yearning and it’s amazing what the Yearn engineers have accomplished here.

The beauty of this is that the composability is infinite. Many other projects are building on top of Yearn, making even more complex financial systems but at the same time even so more elegant and beautiful.

This simplicity on the front and complexity at the back is what drew us to build on top of [Yearn Finance](https://yearn.finance/). The end-users, in the end, just want a simple and safe way to compound their earnings and grow their principal. [Here](https://0xpajic.com/blog/how-to-leverage-credit-tesseract/) is an example of what a manual strategy looks like.
<br/><br/>![tesseract](/media/from-simple-primitives-to-complex-defi-strategy/tesseract.jpeg "Connect wallet to AAVE")<br/>
After initial fascination with this composable, foldable programmable money, the reality kicks in and you realize that although you can do all of this manually, why should you? We built [Tesseract](https://tesr.finance/#/) on [Polygon](https://polygon.technology/) and [Avalanche](https://www.avax.network/) (chains that have pretty inexpensive transactions compared to [ETH mainnet](https://ethereum.org/en/enterprise/)).

The main value for people is no longer “pool together funds to make farming profitable for smaller amounts”. Instead, we automate things and make sure that things are safe. Things are moving really fast and keeping all the strategies up to date is a pretty monumental task.

Check out the story of Tesseract [here](https://medium.com/tesseract-finance/the-genesis-of-tesseract-finance-9b73400a05b1).
