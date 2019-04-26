import Web3 from 'web3-cmt';
import Product from '../models/Product';
import MyComment from '../models/MyComment';
import constants from '../constants/constants';

export default class ContractWrapper {
  constructor(web3Provider, abi, contractAddress, ownerAccount) {
    const web3 = new Web3(new Web3.providers.HttpProvider(web3Provider));
    const contract = web3.cmt.contract(abi);
    this.instance = contract.at(contractAddress);
    this.ownerAccount = ownerAccount;
  }

  call(method, params) {
    // console.log(`Call contract method ${method} with params: ${params}`);

    return new Promise((resolve, reject) => {
      this.instance[method].call(params, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          console.error(error);
          reject(error);
        }
      });
    });
  }

  numOfProducts() {
    return this.call('numOfProducts', {});
  }

  numOfComments() {
    return this.call('numOfComments', {});
  }

  getProductById(id) {
    return this.call('getProductById', id);
  }

  getCommentById(id) {
    return this.call('getCommentById', id);
  }

  getCommentsByProduct(productId) {
    return this.call('getCommentsByProduct', productId);
  }

  loadRecentItems() {
    const promises = constants.RECENT_ITEMS.map(item => {
      return this.getProductById(item.id);
    });

    return Promise.all(promises);
  }

  productHasComments(productId) {
    return this.call('productHasComments', productId);
  }
}
