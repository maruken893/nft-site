module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('NFT', {
    from: deployer,
    args: [
      'liona kickoff NFT',
      'LKN',
      'https://gateway.pinata.cloud/ipfs/QmVLhRQnN9foFErdtjXqhmQ9PNkV85gNnaojDhJeh1Urke/'
    ]
  });
};
module.exports.tags = ['NFT'];