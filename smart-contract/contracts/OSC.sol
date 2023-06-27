// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract OpenSeaClone is ERC721, Ownable {
    using Counters for Counters.Counter;
    mapping(uint256 => string) private _tokenId2Cid;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("OpenSeaClone", "OSC") {}

    function safeMint(address to, string memory cid) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenId2Cid[tokenId] = cid;
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
    
    function getIpfsCid(uint256 tokenId) external view returns (string memory) {
        return _tokenId2Cid[tokenId];
    }
}
