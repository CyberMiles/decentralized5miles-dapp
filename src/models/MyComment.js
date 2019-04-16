class MyComment {
  constructor(id, productId, userId, content, createdAt) {
    // id|product_id|user_id|content|created_at
    this.id = id;
    this.productId = productId;
    this.userId = userId;
    this.content = content;
    this.createdAt = new Date(parseInt(createdAt, 10) * 1000).toISOString();
  }

  toString() {
    return `Comment[id=${this.id}, productId=${this.productId}, userId=${this.userId}, content=${
      this.content
    }, createdAt=${this.createdAt}]`;
  }
}

export default MyComment;
