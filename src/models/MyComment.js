class MyComment {
  constructor(id, productId, userId, content, createdAt) {
    // id|product_id|user_id|content|created_at
    this.id = id;
    this.productId = productId;
    this.userId = userId;
    this.content = content;
    try {
      this.createdAt = new Date(parseInt(createdAt, 10) * 1000).toISOString();
    } catch (error) {
      this.createdAt = 'N/A';
    }
  }

  static fromString(rawStr) {
    const [id, productId, userId, content, createdAt] = rawStr.split('|');
    return new MyComment(id, productId, userId, content, createdAt);
  }

  toString() {
    return `Comment[id=${this.id}, productId=${this.productId}, userId=${this.userId}, content=${
      this.content
    }, createdAt=${this.createdAt}]`;
  }
}

export default MyComment;
