import React from "react";
import Product from "../Product/Product"
import './Catalogue.css';

class Catalogue extends React.Component {

  render(){
    return(
        <div className="container">        
            <div className="row">
                {this.props.products.map(product => <Product product={product}/> )}
            </div>
        </div>
    )
  }
}

export default Catalogue;