// Loads nearlib and this contract into window scope.
import "babel-polyfill";
import Tokens from "./frontend/corgi.jsx";
import React from "react";
import ReactDOM from "react-dom";
import "./frontend/corgi.css";
import "./config.js"

async function doInitContract() {
  window.near = await nearlib.dev.connect(nearConfig);

  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ["totalSupply", "balanceOf", "allowance", "ownerOf", "name", "symbol", "getCorgisByOwner", "getCorgi", "getSender", "generateRandomDna", "generateRandomColorHex"],
    changeMethods: ["init", "transfer", "approve", "transferFrom", "createRandomCorgi", "takeOwnership", "setCorgi", "setCorgisByOwner", "setBalance"],
    sender: nearlib.dev.myAccountId
  });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

window.nearInitPromise = doInitContract().then(()=>{
  ReactDOM.render( < Tokens contract={contract} / > ,
    document.getElementById('tokens')
  );
}).catch(console.error);
