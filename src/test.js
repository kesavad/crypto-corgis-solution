// >> tests-snippet
describe("Greeter", function() {
    let near;
    let contract;
    let accountId;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    // Common setup below
    beforeAll(async function() {
      if (window.testSettings === undefined) {
        window.testSettings = {};
      }
      near = await nearlib.dev.connect(testSettings);
      accountId = testSettings.accountId ? testSettings.accountId : nearlib.dev.myAccountId;
      const contractName = testSettings.contractName ?
        testSettings.contractName :
        (new URL(window.location.href)).searchParams.get("contractName");
      contract = await near.loadContract(contractName, {
        viewMethods: ["totalSupply", "balanceOf", "allowance", "ownerOf", "name", "symbol", "getCorgisByOwner", "getCorgi", "getSender", "generateRandomDna", "generateRandomColorHex"],
        changeMethods: ["init", "transfer", "approve", "transferFrom", "createRandomCorgi", "takeOwnership", "setCorgi", "setCorgisByOwner", "setBalance"],
        sender: accountId
      });
    });

    // Multiple tests can be described below. Search Jasmine JS for documentation.
    describe("Tokens", function() {
      beforeAll(async function() {
        // There can be some common setup for each test.
        contract.init({
          initialOwner: accountId
        })
      });

      it("gets the total supply", async function() {
        const result = await contract.totalSupply();
        expect(result).toBe("420");
      });
  });
});
// << tests-snippet
