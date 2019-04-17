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
    console.log(`Call contract method ${method} with params: ${params}`);

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

    // console.log(`Result of calling contract: ${res}`);

    // return res;
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

  // getCommentsByProduct(productId) {
  //   const comments = [];

  //   try {
  //     const res = this.call('getCommentsByProduct', productId);
  //     const commentIds = res.split('|');
  //     commentIds.forEach(id => {
  //       comments.push(this.getCommentById(id));
  //     });

  //     return comments;
  //   } catch (error) {
  //     console.error(`Something went wrong: ${error}`, error.stack);
  //     return comments;
  //   }
  // }

  getCommentsByProduct(productId) {
    return this.call('getCommentsByProduct', productId);
  }

  loadRecentItems() {
    const promises = constants.RECENT_ITEM_IDS.map(id => {
      return this.getProductById(id);
    });

    return Promise.all(promises);
  }
}
