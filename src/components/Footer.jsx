import { Link } from "react-router-dom";
export default function Footer() {

    return (
        <footer>
            <div className="container pt-5 pb-5">
                <div className="row mb-5 d-flex justify-content-between">
                    <div className="col-auto">
                        <h2>Mix & Buy</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex flex-column">
                            <Link to="/" className="text-decoration-none text-light mb-1" aria-current="page">Home</Link>
                            <Link to="/aboutUs" className="text-decoration-none text-light mb-1" aria-current="page">About us</Link>
                            <Link to="/products" className="text-decoration-none text-light mb-1" aria-current="page">Products</Link>
                            <Link to="/" className="text-decoration-none text-light mb-1" aria-current="page">Home</Link>
                            <Link to="/aboutUs" className="text-decoration-none text-light mb-1" aria-current="page">About us</Link>
                            <Link to="/products" className="text-decoration-none text-light mb-1" aria-current="page">Products</Link>
                            <Link to="/" className="text-decoration-none text-light mb-1" aria-current="page">Home</Link>
                            <Link to="/aboutUs" className="text-decoration-none text-light mb-1" aria-current="page">About us</Link>
                            <Link to="/products" className="text-decoration-none text-light mb-1" aria-current="page">Products</Link>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex flex-column">
                            <Link to="/" className="text-decoration-none text-light mb-1" aria-current="page">Home</Link>
                            <Link to="/aboutUs" className="text-decoration-none text-light mb-1" aria-current="page">About us</Link>
                            <Link to="/products" className="text-decoration-none text-light mb-1" aria-current="page">Products</Link>
                            <Link to="/" className="text-decoration-none text-light mb-1" aria-current="page">Home</Link>
                            <Link to="/aboutUs" className="text-decoration-none text-light mb-1" aria-current="page">About us</Link>
                            <Link to="/products" className="text-decoration-none text-light mb-1" aria-current="page">Products</Link>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </footer>
    )
}