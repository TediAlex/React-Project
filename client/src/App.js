// Import Components
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { CreateProduct } from './components/createProduct/CreateProduct';

import { ProductsList } from './components/products/ProductsList';
import { ProductDetail } from './components/products/ProductDetail';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { UserContext } from './contexts/UserContext';
import { MyProfile } from './components/my-profile/MyProfile';
import { ProductContext } from './contexts/ProductContext';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './hook/useLocalStorage';
import * as productService  from './services/productService';

import { Logout } from './components/logout/Logout'

function App() {
  const [user, setUser] = useLocalStorage('auth', {});
  const [products, setProducts] = useState([]);
 
 

  const userLogin = (authData) => {
    setUser(authData);
  };

  const userLogout = () => {
    setUser({});
  };
  

  // const [products, setProducts] = useState([]);
  // // console.log(user.accessToken)

  useEffect(() => {
    fetch('http://localhost:3030/data/products/',{
      method:"GET",
      headers: {
        // 'X-Authorization': `${user.accessToken}`,
                    'content-type': 'application/json'
                }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setProducts(result)
    })
}, []);
// const  limitProductsForHome  =  products.slice(0,3)
  return (
    <div>
      
      <UserContext.Provider value={{ user: user, userLogin, userLogout }}>
        <Header />
        <ProductContext.Provider value={{ products}}
         >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/create-product" element={<CreateProduct />} />


        </Routes>
        </ProductContext.Provider >

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
