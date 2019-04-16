import Web3 from 'web3-cmt';
import Product from '../models/Product';
import MyComment from '../models/MyComment';

export default class ContractWrapper {
  constructor(web3Provider, abi, contractAddress, ownerAccount) {
    const web3 = new Web3(new Web3.providers.HttpProvider(web3Provider));
    const contract = web3.cmt.contract(abi);
    this.instance = contract.at(contractAddress);
    this.ownerAccount = ownerAccount;
  }

  call(method, params) {
    console.log(`Call contract method ${method} with params: ${params}`);
    const res = this.instance[method].call(params);
    console.log(`Result of calling contract: ${res}`);

    return res;
  }

  numOfProducts() {
    return this.call('numOfProducts', {});
  }

  numOfComments() {
    return this.call('numOfComments', {});
  }

  getProductById(id) {
    const res = this.call('getProductById', id);
    const [, title, desc, price, category, userId, imageLink, location, state, createdAt, updatedAt] = res.split('|');
    const product = new Product(
      id,
      title,
      desc,
      price,
      category,
      userId,
      imageLink,
      location,
      state,
      createdAt,
      updatedAt
    );

    return product;
  }

  getCommentById(id) {
    const res = this.call('getCommentById', id);
    const [, productId, userId, content, createdAt] = res.split('|');
    const comment = new MyComment(id, productId, userId, content, createdAt);
    return comment;
  }

  getCommentsByProduct(productId) {
    const comments = [];

    try {
      const res = this.call('getCommentsByProduct', productId);
      const commentIds = res.split('|');
      commentIds.map(id => {
        comments.push(this.getCommentById(id));
      });

      return comments;
    } catch (error) {
      console.error(`Something went wrong: ${error}`, error.stack);
      return comments;
    }
  }
}
