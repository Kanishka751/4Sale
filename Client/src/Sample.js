import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarnew from './Navbarnew';
import Combined from './Combined.css';
import { connect } from 'react-redux';
import { addItem } from './actions/ActionCreators';
import { Link } from 'react-router-dom';



class Sample extends Component {
    state = {
        title: '',
        description: '',
        email: '',
        price: '',
        category: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    onSubmit = (e) => {
        if (this.state.title === '' || this.state.description === '' || this.state.price === '' || this.state.category === '' || this.state.email === '') {
            alert("Please Fill all the Fields");
            e.preventDefault();
        }

        else {
            e.preventDefault();
            const newItem = {
                title: this.state.title,
                description: this.state.description,
                email: this.state.email,
                price: this.state.price,
                category: this.state.category
            }

            this.props.addItem(newItem);
            (alert("Sucessfully Posted AD ..."))
        }
    }

    render() {

        return (
            <div>
                <div className="container-fluid ">
                    <main>
                        <div className="d-flex justify-content-center flex-column bd-highlight mb-3">

                            <br />

                            <div class="row featurette d-flex justify-content-center customHeaderSellPage">
                                <div class="col-md-7">
                                    <h2 class="featurette-heading">Want to share your belongings?<br /><br /><br /> Post an AD now !!</h2>
                                </div>
                                <div class="col-md-5 ">
                                    <img class=" img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="https://source.unsplash.com/1600x900/?money,finance" alt="Displat Image SellPage"></img>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="row g-5  d-flex justify-content-center">

                                <div class="col-md-7 col-lg-8 bg-light ">
                                    <br />
                                    <h2 class="mb-3 "><u>Product Details</u></h2><br /><br />
                                    <form class="needs-validation" novalidate="" onSubmit={this.onSubmit} >
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <label for="address" class="form-label">Product Title</label>
                                                <input type="text" class="form-control" id="productTitle" placeholder="Enter the product title here" required name="title" onChange={this.onChange} />
                                                <div class="invalid-feedback">
                                                    Please enter product title.
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="username" class="form-label">Product Description</label>
                                                <div class="input-group has-validation">
                                                    <textarea class="form-control" id="username" placeholder="Enter Product Description" required name="description" onChange={this.onChange}></textarea>
                                                    <div class="invalid-feedback">
                                                        Please enter product description.
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                                                <input type="email" class="form-control" id="email" placeholder="you@example.com" name="email" onChange={this.onChange} />
                                                <div class="invalid-feedback">
                                                    Please enter a valid institute email address .
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center flex-column bd-highlight mb-3">
                                                <div class="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                    <label for="address" class="form-label">Price</label>
                                                    <input type="text" class="form-control" id="address" placeholder="Set a Price" required name="price" onChange={this.onChange} />

                                                    <div class="invalid-feedback">
                                                        Please enter product price.
                                                    </div>
                                                </div>


                                                <div class="col-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                                    <label for="address" class="form-label">Category</label>
                                                    <input type="text" class="form-control" id="catgory" placeholder="Enter the category" required name="category" onChange={this.onChange} />

                                                    <div class="invalid-feedback">
                                                        Please enter product category.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <hr class="my-4" />
                                        <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly ">
                                            <button class="w-100 btn btn-success btn-lg" type="submit">Post Ad</button>
                                            <button class="w-100 btn btn-primary btn-lg" type="cancel"><Link to="/4Sale" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>

                    <br />
                    <br />
                    <br />
                    <br />
                </div>


                <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

                <script src="form-validation.js"></script>


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(Sample);
