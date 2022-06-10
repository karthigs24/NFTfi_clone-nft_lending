const AirdropFlashLoan = artifacts.require("AirdropFlashLoan");
const AirdropReceiver = artifacts.require("AirdropReceiver");
const AirdropReceiverFactory = artifacts.require("AirdropReceiverFactory");

const NftfiBundler = artifacts.require("NftfiBundler");

const DirectLoanBaseMinimal = artifacts.require("DirectLoanBaseMinimal");
const DirectLoanFixedOffer = artifacts.require("DirectLoanFixedOffer");
const DirectLoanCoordinator = artifacts.require("DirectLoanCoordinator");
const BaseLoan = artifacts.require("BaseLoan");

const PermittedAirdrops = artifacts.require("PermittedAirdrops");
const PermittedERC20s = artifacts.require("PermittedERC20s");
const PermittedNFTsAndTypeRegistry = artifacts.require("PermittedNFTsAndTypeRegistry");
const PermittedPartners = artifacts.require("PermittedPartners");

const SmartNft = artifacts.require("SmartNft");

const NftfiHub = artifacts.require("NftfiHub");

const MyToken = artifacts.require("MyToken");

const ContractKeys = artifacts.require("ContractKeys");

module.exports = async function (deployer, network, accounts) {

  await deployer.deploy(MyToken);
  const token = await MyToken.deployed();
  const instanceOfLibA = await deployer.deploy(ContractKeys);
  // const instanceOfLibA = await ContractKeys.at([DirectLoanFixedOffer.address]);
  await deployer.link(instanceOfLibA, NftfiHub);
  await deployer.deploy(NftfiHub);
  const hub = await NftfiHub.deployed();
  const offer = await DirectLoanFixedOffer.deployed();
  const coodinator = await DirectLoanCoordinator.deployed();
  const nft = await SmartNft.deployed();
  // await deployer.deploy(MyToken);
  // const token = await MyToken.deployed();
  await deployer.deploy(DirectLoanFixedOffer, address.this, hub.address, [token.address]);

  await deployer.deploy(AirdropFlashLoan, hub.address);
  await deployer.deploy(AirdropReceiver, hub.address);
  await deployer.deploy(AirdropReceiverFactory, address.this, hub.address);
  await deployer.deploy(NftfiBundler, hub.address, "est", "EST");
  await deployer.deploy(DirectLoanBaseMinimal, address.this, hub.address, "0x4449524543545f4c4f414e5f434f4f5244494e41544f52000000000000000000", [token.address]);
  await deployer.deploy(DirectLoanCoordinator, hub.address, address.this, ["DIRECT_LOAN_FIXED_OFFER"], [offer.address]);
  await deployer.deploy(BaseLoan, address.this);

  await deployer.deploy(PermittedAirdrops, address.this, [], []);
  await deployer.deploy(PermittedERC20s, address.this, []);
  await deployer.deploy(PermittedNFTsAndTypeRegistry, address.this, hub.address, ["ERC721"], ["0xB2C2fCe38a0B7A89aB51F046B7052892Ba55EB2B"], [nft.address], ["ERC721"]);
  await deployer.deploy(PermittedPartners, address.this);

  await deployer.deploy(SmartNft, address.this, hub.address, coodinator.address, "nft", "NFT", "https://bafybeieyqiefi5zbm6jka65zv2e5q5xx755ah5ul5iz2njrvdv6hya44yu.ipfs.nftstorage.link/metadata/1.json")

  // await deployer.deploy(PermittedNFTsAndTypeRegistry, hub.address, [ERC721, CryptoKitties, ERC1155, AirdropWrapper], ["0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d", "0x79986af15539de2db9a5086382daeda917a9cf0c", "0x913ae503153d9a335398d0785ba60a2d63ddb4e2", "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a"], [ERC721, ERC721, ERC721, ERC721]);

};
