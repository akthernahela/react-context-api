import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    function findProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response =>
                setProduct(response.data))
            .catch(error =>
                console.error(error));
    }
    useEffect(findProduct, [id])

    return (
        <>
            <Header />
            <Main />
            <div className="container my-5">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="card w-75 h-100 d-flex flex-column" key={product.id}>
                            <img src={product.image} className="card-img-top p-3 mx-auto" alt="" />
                            <div className="card-body d-flex flex-column">
                                <h3 className="card-title">{product.title}</h3>
                                <h6 className="card-text">Category: {product.category}</h6>
                                <p className="card-text mt-1">{product.description}</p>
                                <p className="card-text mt-3">Price: {product.price} €</p>
                                <Link className='btn btn-dark mt-auto' to="/products">
                                    <i className="bi bi-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}