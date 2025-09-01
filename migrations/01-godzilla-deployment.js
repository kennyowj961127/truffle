const Godzilla = artifacts.require("Godzilla");

module.exports = function (deployer, network, accounts) {
    // console.log("Deploying Godzilla contract...");
    // console.log("Network:", network);
    // console.log("Accounts:", accounts);
    deployer.deploy(Godzilla, accounts[0]);
};
