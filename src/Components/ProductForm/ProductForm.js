import React from "react";
import "./ProductForm.css";
import Swal from 'sweetalert2';

class ProductForm extends React.Component {

    state = {
        title: "",
        image: "",
        description: "",
        price: "",
        category: "",
        isInvalidForm: false,
        isValidForm: false,
        msgErrores: ""
    }

    resetForm = () => {
        this.setState({
            title: "",
            image: "",
            description: "",
            price: "",
            category: "",
            isInvalidForm: false,
            isValidForm: false,
            msgErrores: ""
        })
    }

    onSubmit = e => {
        if (!this.state.title || !this.state.image || !this.state.description || !this.state.price || !this.state.category) {
            //alert("You must complete all the fields of the form")
            this.setState({
                isInvalidForm: true,
                msgErrores: "Debe completar todos los campos del formulario"
            })

        } else {
            this.props.addProduct(this.state.title, this.state.image, this.state.description, this.state.price, this.state.category)
            //alert("Product added successfully!")
            this.setState({
                isValidForm: true,
                msgErrores: "El producto se añadió con éxito"
            })
            Swal.fire(
                'Good job!',
                'The product has been added successfully!',
                'success'
            )
            this.resetForm();
        }
        e.preventDefault();
    }

    onChange = e => {
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
                        <input className="form-control" type="text" maxLength="100" placeholder="Title" name="title" value={this.state.title} onChange={this.onChange} requerid />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" maxLength="200" placeholder="Url image" name="image" value={this.state.image} onChange={this.onChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" maxLength="300" placeholder="Description" name="description" value={this.state.description} onChange={this.onChange} requerid />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="number" min="0" max="99999" step="0.01" placeholder="Price" name="price" value={this.state.price} onChange={this.onChange} requerid />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="text" maxLength="30" placeholder="Category" name="category" value={this.state.category} onChange={this.onChange} requerid />
                    </div>
                    <div className="col-md-6">
                        <p>{this.state.isInvalidForm ? this.state.msgErrores : ""}
                            {this.state.ValidForm ? this.state.msgErrores : ""}
                        </p>
                    </div>

                </fieldset>
                <button className="btn" type="submit">Submit</button>
                <button className="btnCancel" type="reset" onClick={() => this.resetForm()}>Cancel</button>
            </form>
        )
    }
}

export default ProductForm;