const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFT', function () {
  it('', async function () {
    [signer] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory('NFT');
    const nftContract = await NFT.deploy(
      'liona kickoff NFT',
      'LKN'
    );
    await nftContract.deployed();

    const tx2 = await nftContract.mintNFT(signer.address, 0, {value: ethers.utils.parseEther("1")});



    // wait until the transaction is mined
    // await tx2.wait();

    // console.log(tx2)

    const balance = await nftContract.balanceOf(signer.address);
    console.log({balance})

    const owner = await nftContract.ownerOf(0)
    console.log({owner})

    console.log(await nftContract.currentAmount());

    const withdraw = await nftContract.withdraw();
    console.log({withdraw})

    console.log(await nftContract.currentAmount());

    console.log(signer)
  });
});
