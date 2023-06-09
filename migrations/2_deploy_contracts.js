const CryptoPals = artifacts.require("CryptoPals");

module.exports = function (deployer) {
  deployer.deploy(CryptoPals, "https://aquamarine-embarrassing-eel-178.mypinata.cloud/ipfs/QmRDrUSA7PPdBo7SSvtTn8HbEhy5ESDrezeBN2fxMwLrhG/");
};