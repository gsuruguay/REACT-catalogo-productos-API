import React from 'react';
import "./Product.css";

class Product extends React.Component {

    render() {
        const { product } = this.props;
        return (
            <div key={product.id} className="cont-card">
                <div className="card">
                    <div className="card-body">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt="" />
                        <p>{product.description}</p>
                        <h1 className="price">${product.price}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;