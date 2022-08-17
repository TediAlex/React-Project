// Import Components
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { CreateProduct } from './components/createProduct/CreateProduct';
import { ProductsList } from './components/products/ProductsList';
import { ProductDetail } from './components/products/ProductDetail';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { EditProduct } from './components/editProduct/EditProduct';
import { Logout } from './components/logout/Logout';
import { MyProfile } from './components/my-profile/MyProfile';
import { PageNotFoundError } from './components/page-not-found/PageNotFoundError';
// Import Context
import { UserProvider } from './contexts/UserContext';
import { ProductContext } from './contexts/ProductContext';
// Import Setvices
import { useLocalStorage } from './hook/useLocalStorage';
// Import Default
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [user] = useLocalStorage('auth', {});
  const [products] = useState([]);
  console.log(user)
  return (
    <div>
      <UserProvider>
        <Header />
        <ProductContext.Provider value={{ products }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route
              path="/products/:productId/edit-product"
              element={<EditProduct />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/404" element={<PageNotFoundError />} />
          </Routes>
        </ProductContext.Provider>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
