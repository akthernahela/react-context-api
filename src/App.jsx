import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./shop/HomePage";
import AboutUs from "./shop/AboutUs";
import Products from "./shop/Products";
import SingleProduct from './shop/SingleProduct';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
