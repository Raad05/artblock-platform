// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CommunityContract {
    struct Community {
        address communityAddress;
        string name;
        string description;
        uint totalMembers;
        uint tokenBalance;
        string tokenName;
        string tokenSymbol;
        uint exchangeRate;
    }

    Community[] public communities;
    address[] public members;

    // Mapping to track which community a member belongs to
    mapping(address => uint) public memberToCommunity;

    function addMembers(uint _communityIdx) public {
        require(_communityIdx < communities.length, "Invalid community index");
        members.push(msg.sender);
        memberToCommunity[msg.sender] = _communityIdx;
        communities[_communityIdx].totalMembers++;
    }

    function createCommunity(
        string memory _name,
        string memory _description,
        string memory _tokenName,
        string memory _tokenSymbol,
        uint _exchangeRate
    ) public {
        Community memory newCommunity = Community({
            communityAddress: msg.sender,
            name: _name,
            description: _description,
            totalMembers: 0,
            tokenName: _tokenName,
            tokenBalance: 0,
            tokenSymbol: _tokenSymbol,
            exchangeRate: _exchangeRate
        });
        communities.push(newCommunity);
    }

    function getCommunities() public view returns (Community[] memory) {
        return communities;
    }
}
