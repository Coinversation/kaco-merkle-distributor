// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
const hre = require("hardhat");

const kaco = "0xf96429A7aE52dA7d07E60BE95A3ece8B042016fB";

const airdrop = "0x06351909a335fD23e2EFd93bEe7e2047332455fE";

const merkleRoot = "0xabd9fe4b4874c6846546c0cbbb959d1007a814fc8a04835284e403e49bb2942f";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const KacoAirDrop = await ethers.getContractFactory("KacoAirDrop");
  // const airDrop = await KacoAirDrop.deploy(kaco, merkleRoot);

  // await airDrop.deployed();

  // console.log("airDrop deployed to:", airDrop.address);

  await hre.run("verify:verify", {
    address: airdrop,
    contract: "contracts/KacoAirDrop.sol:KacoAirDrop",
    constructorArguments: [kaco, merkleRoot]
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
