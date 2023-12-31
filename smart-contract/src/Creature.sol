// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Creature is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradable("Creature", "OSC", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "https://ipfs.io/ipfs/QmZjPEMKkm7kmLjxdVKb7btR4Jqy4Kh3xHfYESrXZq1BCt";
    }

    function contractURI() public pure returns (string memory) {
        return "";
    }
}