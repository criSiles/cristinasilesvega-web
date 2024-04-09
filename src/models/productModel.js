class Size {
    constructor(size, quantity) {
        this.size = size;
        this.quantity = quantity;
    }
}

class Color {
    constructor(color, imageSrc, imageAlt, sizes) {
        this.color = color;
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt;
        this.sizes = sizes.map(size => new Size(size.size, size.quantity));
    }
}

class Product {
    constructor(id, name, href, price, colors, review) {
        this.id = id;
        this.name = name;
        this.href = href;
        this.price = price;
        this.colors = colors.map(color => new Color(color.color, color.imageSrc, color.imageAlt, color.sizes));
        this.review = review;
    }
}

class ProductsDB {
    constructor(products) {
        this.products = products.map(product => new Product(product.id, product.name, product.href, product.price, product.colors, product.review));
    }
}

module.exports = ProductsDB;