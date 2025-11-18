import Header from "../components/Header";
import Main from "../components/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function Products() {
    const productsList = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(productsList)
            .then(response =>
                setProducts(response.data))
            .catch(error =>
                console.error(error));
    }, []);
    return (
        <>
            <Header />
            <Main />
            <div className="container">
                <div className="intro d-flex justify-content-between">
                    <h2>I nostri prodotti</h2>
                    <a href="#"><i className="bi bi-cart4 text-black fs-1"></i></a>
                </div>
                <hr />
                <div className="row d-flex flex-wrap justify-content-around">
                    {
                        products.map(product => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="card h-100 d-flex flex-column" key={product.id}>
                                    <img src={product.image} className="card-img-top p-3 mx-auto" alt="" />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text mt-3">Price: {product.price} €</p>
                                        <Link className='btn btn-dark mt-auto' to={`/products/${product.id}`}>
                                            <i className="bi bi-cart-plus"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}