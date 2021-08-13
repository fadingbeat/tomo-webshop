import React, { Component } from "react";
import { commerce } from "./lib/commerce";
import ProductsList from "./components/ProductsList";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);

    this.state = {
      products: [],
      cart: {},
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCart();
  }

  fetchProducts() {
    commerce.products
      .list()
      .then((products) => {
        this.setState({ products: products.data });
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }

  fetchCart() {
    commerce.cart
      .retrieve()
      .then((cart) => {
        this.setState({ cart });
      })
      .catch((error) => {
        console.error("There was an error fetching the cart", error);
      });
  }

  handleAddToCart(productId, quantity) {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        this.setState({ cart: item.cart });
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="app">
        <ProductsList products={products} onAddToCart={this.handleAddToCart} />
      </div>
    );
  }
}

export default App;
