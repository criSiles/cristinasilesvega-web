import { defineStore } from 'pinia'
import deafultData from '../../data/productsDb.json'

export const useEshopStore = defineStore('eshopStore', {
  state: () => ({
    products: [],
    cart: [],
    loading: true,
    name: 'Eshop Store'
  }),
  getters: {
    getProductById: (state) => (id) => {
      console.log('All the products:', state.products)
      console.log('Getting the product with id:', id)

      id = parseInt(id)

      const product = state.products.find((p) => p.id === id)

      if (product === undefined) {
        console.log('The product does not exist')
        return
      }

      console.log('Found product:', product)
      return product
    },
    // I don't know yet if I'm going to use this
    getProductByCategory: (state) => (category) => {
      console.log('All the products:', state.products)
      console.log('Getting the products with category:', category)

      const products = state.products.filter((p) => p.category === category)

      if (products === undefined) {
        console.log('The products do not exist')
        return
      }

      console.log('Found products:', products)
      return products
    }
  },
  actions: {
    async fetchProducts() {
      this.loading = true
      var data

      if (this.products.length > 0) {
        console.log('Products already loaded')
        this.loading = false
        return
      } else {
        this.loadProducts()

        if (this.products.length > 0) {
          console.log('Products loaded from local storage')
          this.loading = false
          return
        } else {
          data = deafultData.products
        }

        console.log('Data has arrived!', data)
      }
      this.products = data
      this.loading = false
    },

    loadProducts() {
      const products = JSON.parse(localStorage.getItem('products'))
      if (products) {
        this.products = products
      }
    },

    async addReview(review, productId) {
      // Product indez is always -1, this doesn't works
      const productIndex = this.products.findIndex((product) => product.id === productId)

      console.log('Product index:', productIndex)
      if (productIndex === -1) {
        console.log('Product not found')
        return
      }

      this.products[productIndex].reviews.unshift(review)

      console.log('Adding the review', review, 'to the product with id:', productId)

      // Update the local storage
      localStorage.setItem('products', JSON.stringify(this.products))
    },

    updateCart(productCart) {
      const productIndexInCart = this.cart.findIndex(
        // if cartItem is already in the cart, findIndex will return the index of the product, if nor it will return -1
        (cartItem) =>
          cartItem.id === productCart.id &&
          cartItem.color === productCart.color &&
          cartItem.size === productCart.size &&
          cartItem.price === productCart.price &&
          cartItem.imageSrc === productCart.imageSrc
      )

      if (productIndexInCart !== -1) {
        console.log('This product is already in the cart')
        this.cart[productIndexInCart].quantity++
      } else {
        console.log('This product is not in the cart',this.cart)
        this.cart.push(productCart)
      }

      localStorage.setItem('cartProducts', JSON.stringify(this.cart))
      console.log('This is the cart', this.cart)
    },

    removeFromCart(product) {
      const index = this.cart.indexOf(product)
      this.cart.splice(index, 1)
    }
  }
})
