var demo = artifacts.require("./demo.sol");

module.exports = function(deployer) {
  deployer.deploy(demo);
};