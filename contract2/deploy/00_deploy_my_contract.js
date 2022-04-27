module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('NFT2', {
    from: deployer,
    args: [
      'liona kickoff NFT',
      'LKN'
    ]
  });
};
module.exports.tags = ['NFT2'];