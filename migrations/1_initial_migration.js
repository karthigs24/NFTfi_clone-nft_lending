const DirectLoanFixedOffer = artifacts.require("DirectLoanFixedOffer");
const NftfiHub = artifacts.require("NftfiHub");
const MyToken = artifacts.require("MyToken");

module.exports = async function (deployer) {
  await deployer.deploy(NftfiHub);
  const hub = await NftfiHub.deployed();
  await deployer.deploy(MyToken);
  const token = await MyToken.deployed();
  await deployer.deploy(DirectLoanFixedOffer, hub.address, token.address);

};
