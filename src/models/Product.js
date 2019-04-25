class Product {
  constructor(id, title, desc, price, category, userId, imageLink, location, state, createdAt, updatedAt) {
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
    try {
      this.createdAt = new Date(parseInt(createdAt, 10) * 1000).toISOString();
    } catch (error) {
      this.createdAt = 'N/A';
    }

    try {
      this.updatedAt = new Date(parseInt(updatedAt, 10) * 1000).toISOString();
    } catch (error) {
      this.updatedAt = 'N/A';
    }
  }

  static fromStringArray(rawStrArray) {
    // id|userId|status||createdAt|updatedAt, title, desc, price, category, location, imageLink
    const [id, userId, state, createdAt, updatedAt] = rawStrArray[0].split('|');
    const [, title, desc, price, category, location, imageLink] = rawStrArray;

    // handle image link(sample: http://res.5milesapp.com/image/upload/v1555646242/byz7phcp583kxxrsjp3w.webp)
    // const ts = imageLink.match(/v[0-9]{10}/)[0]; // v1555646242
    const matches = imageLink.match(/v[0-9]{10}/);
    if (matches == null) {
      return null;
    }

    const ts = matches[0]; // v1555646242
    const split = imageLink.split(ts);
    const newImageLink = `${split[0]}f_auto,t_i800/${ts}${split[1]}`
      .replace('http', 'https')
      .replace('res.5milesapp.com', 'fivemiles-res.cloudinary.com');

    const ob = new Product(
      id,
      title,
      desc,
      price,
      category,
      userId,
      newImageLink,
      location,
      state,
      createdAt,
      updatedAt
    );

    return ob;
  }

  toString() {
    return `Product[id=${this.id}, desc=${this.desc}, price=${this.price}, category=${this.category}, userId=${
      this.userId
    }, imageLink=${this.imageLink}, location=${this.location}, state=${this.state}, createdAt=${
      this.createdAt
    }, updatedAt=${this.updatedAt}]`;
  }
}

export default Product;
