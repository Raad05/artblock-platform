Certainly! Below is a refined version of your `README.md`:

# ArtBlock: Creator-Based NFT Platform


## Project Overview

Welcome to ArtBlock, a visionary NFT platform empowering creators to build communities, publish products, and engage in a decentralized marketplace. ArtBlock stands out with dynamic royalties, non-transferable exclusive items, and a robust governance system where community members vote on minted products.

## Stakeholders

- Community Creators
- Community Members
- Artists and Creators
- NFT Buyers and Sellers
- ArtBlock Developers

## Overview Diagram
![image1](https://github.com/Raad05/artblock-platform/assets/61306531/5e5bce32-53bf-41c7-852c-16ad609598a9)

## Platform Highlights

- **Purchase Platform Token (ABx):** Acquire ABx using Ether.
- **Create and Manage Communities:** Establish and oversee creative communities.
- **Publish Art Products:** Showcase and mint art products through community voting.
- **NFT Marketplace:** Engage in buying and selling exclusive NFTs within communities.

## Technical Architecture
The core of the platform is built on an Ethereum blockchain. Smart contracts are deployed on the blockchain to handle functions like community creation, token creation, publishing products etc.

### Smart Contracts

- **ArtBlock Contract:** Manages the native token (ABX) using ERC20 standards.
- **Community Contract:** Enables community creation through ABX token expenditure.
- **User Smart Contract:** Facilitates community membership tracking.
- **NFT Contract:** Supports NFT minting using ERC721 standards.
- **NFT Market Contract:** Facilitates NFT trading within communities.

### Web Application

ArtBlock's user interface is built with ReactJs, providing an intuitive platform for interacting with smart contracts. Users can seamlessly navigate, buy ABx, create and manage communities, and trade NFTs.

### Wallet Connection and Interaction

For wallet connection and interaction we used Rainbow Kit  and Wagmi.  We used Metamask as a trusted crypto wallet option, ensuring a user-friendly and secure experience for our community members.

### Blockchain Infrastructure

ArtBlock is built on the Ethereum blockchain with the Sepolia Testnet. Ethereum's proof-of-stake mechanism ensures efficiency, while the Sepolia testnet allows safe application testing without using real Ether.

### Deployment

We deployed our blockchain smart contracts directly on Remix IDE on a public testnet. This is a quick and easy way to test and debug smart contracts in a safe and sandboxed environment. Once a smart contract has been successfully deployed to a public testnet, it can be verified and audited by the community.

## Proposals

1. Onboarding Time Limits
   To avoid problems arising from a rapid influx of new members, time limits have been established. New members are encouraged to familiarize themselves with the community's rules and standards before actively     participating. The proposed rules are as follows:

  - New Member Token Purchase: New members can buy the community's native token after 12 hours of joining.
  - Artwork Submission Waiting Period: Artwork submission is allowed after 24 hours of joining.
  - Voting Participation Delay: Members can participate in voting after 48 hours of joining.
  These time restrictions ensure that new members spend some time within the community before contributing, fostering a more meaningful and engaged community.

2. Voting Weight Management
  To prevent issues related to members with a significant number of tokens, a voting weight formula has been proposed:
  
 - Voting Weight Formula: voting_weight = (total_coin_held * 0.25) + (total_coin_spent_on_community * 0.5) + (age_of_membership * 0.15) + (nft_on_communities * 0.1)
  Additionally, to maintain a balanced voting system, the voting weight is limited within a certain threshold. This threshold is set at 50% more than the median value, preventing undue concentration of voting      power.

  These measures aim to ensure a fair and democratic decision-making process within the community, balancing the influence of individual members.

3. Utilizing Community Reserve

- Disburse coins to artists whose products are minted in the past month.
- Reward top NFT spenders to encourage auctions and bidding.
- Incentivize new members with reserve coins for community contributions within 72 hours.

4. Dynamic Royalty

Implement a dynamic royalty system:

- Royalty starts at 5%, incrementing by 1% up to 20% with each resale.
- Note: ERC-721 does not inherently support dynamic royalty.

## Challenges

- Token-oriented smart contract development presented challenges due to limited resources and documentation.
- Implementation of voting smart contracts posed difficulties.
- Balancing diverse stakeholder needs.
- Successfully completing the project within a limited timeframe.

## Conclusion

ArtBlock, though still under development, has the potential to revolutionize the digital art ecosystem. By providing creators with more control over their work and fostering a fair and equitable marketplace, ArtBlock aims to shape the future of digital art creation, collection, and trade.

Feel free to customize the content further to suit the specific details and style of your project.
