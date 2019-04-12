import Web3 from 'web3-cmt';

export default class ContractWrapper {
  constructor(web3Provider, abi, contractAddress, ownerAccount) {
    const web3 = new Web3(new Web3.providers.HttpProvider(web3Provider));
    const contract = web3.cmt.contract(abi);
    this.instance = contract.at(contractAddress);
    this.ownerAccount = ownerAccount;
    // console.log(`contract: ${contract}, instance: ${this.instance}`);
  }

  call(method, params) {
    console.log(`Call contract method ${method} with params: ${params}`);
    const res = this.instance[method].call(params);
    console.log(`Result of calling contract: ${res}`);

    return res;
  }
}
