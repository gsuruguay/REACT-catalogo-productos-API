import React from "react";
import Nav from "./Components/Nav/Nav";
import './App.css';
import Catalogue from "./Components/Catalogue/Catalogue";
import ProductForm from "./Components/ProductForm/ProductForm"

class App extends React.Component {

  state={
    products: []
  }

  //Funcion para traer productos al catalogo con Fetch
  async componentDidMount(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.setState({products: data})
  }

  //Funcion para agregar productos del form
  addProduct= (title, image, description, price, category)=>{
    const newProduct ={
      title: title,
      image: image,
      description: description,
      price: price,
      category: category,
      id: this.state.products.length
    }
    this.setState({
      products: [...this.state.products, newProduct]
    })
  }

  render(){
    return (
          <div>
            <Nav />
            <ProductForm addProduct={this.addProduct}/>
            <Catalogue products={this.state.products} />
          </div>
    );
  }
}

export default App;
