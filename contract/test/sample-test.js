const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFT', function () {
  it('', async function () {
    [signer] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory('NFT');
    const nftContract = await NFT.deploy(
      'liona kickoff NFT',
      'LKN',
      'https://gateway.pinata.cloud/ipfs/QmVLhRQnN9foFErdtjXqhmQ9PNkV85gNnaojDhJeh1Urke/'
    );
    await nftContract.deployed();


    const tx = await nftContract.mint(signer.address);

    // wait until the transaction is mined
    await tx.wait();

    const uri = await nftContract.tokenURI(0);
    console.log(uri);


  });
});