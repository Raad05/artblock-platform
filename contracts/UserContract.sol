// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract UserContract {
    struct User {
        address user;
    }

    mapping (address => User[]) public users;
    address[] public joinedCommunities;

    function joinCommunity(address _communityAddress) public {
        User memory newUser = User({
            user: msg.sender
        });
        users[_communityAddress].push(newUser);
        joinedCommunities.push(_communityAddress);
    }
}