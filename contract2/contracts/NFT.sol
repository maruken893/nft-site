//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint MINT_PRICE = 0.01 ether;
    uint amount = 0;
    address payable  owner;
    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;


    constructor(string memory name_, string memory symbol_) payable ERC721(name_, symbol_) {
        owner = payable(msg.sender);
    }

    function mintNFT(address to, uint256 tokenId) public payable {
        require(msg.value >= MINT_PRICE);
        amount += msg.value;
        _mint(to, tokenId);
    }

    function currentAmount() public view returns(uint) {
        return amount;
    }

    function withdraw() public payable returns(uint) {
        require(msg.sender == owner);
        uint returnAmount = address(this).balance;
        owner.transfer(address(this).balance);
        amount = 0;
        return returnAmount;
    }

}