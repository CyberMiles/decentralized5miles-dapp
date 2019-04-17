class Product {
  constructor(
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
  ) {
    // id|title|desc|price|category|user_id|image_link|location|state|created_at|updated_at
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.category = category;
    this.userId = userId;
    this.imageLink = imageLink;
    this.location = location;
    this.state = state;
    this.createdAt = new Date(parseInt(createdAt, 10) * 1000).toISOString();
    this.updatedAt = new Date(parseInt(updatedAt, 10) * 1000).toISOString();
  }

  static fromString(rawStr) {
    const [id, title, desc, price, category, userId, imageLink, location, state, createdAt, updatedAt] = rawStr.split('|');
    const ob = new Product(
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

    return ob;
  }

  toString() {
    return `Product[id=${this.id}, desc=${this.desc}, price=${this.price}, category=${
      this.category
    }, userId=${this.userId}, imageLink=${this.imageLink}, location=${this.location}, state=${
      this.state
    }, createdAt=${this.createdAt}, updatedAt=${this.updatedAt}]`;
  }
}

export default Product;
