import React from "react";
import "./ProductForm.css";

class ProductForm extends React.Component {

    state ={
        title: "",
        image: "",
        description: "",
        price: "",
        category: ""
    }

    onSubmit = e=>{
        if (!this.state.title|| !this.state.image|| !this.state.description|| !this.state.price|| !this.state.category) {
            alert("You must complete all the fields of the form")
        } else{
            this.props.addProduct(this.state.title, this.state.image, this.state.description, this.state.price, this.state.category)
            alert("Product added successfully!")
        }       
        e.preventDefault();
    }

    onChange = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Add a new product</legend>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Url image" name="image" value={this.state.image} onChange={this.onChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.onChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.onChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.onChange} />
                    </div>
                </fieldset>
                <button className="btn" type="submit">Submit</button>
            </form>
        )
    }
}

export default ProductForm;