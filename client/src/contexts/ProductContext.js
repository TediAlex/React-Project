// import { useEffect, useState} from 'react';

// Import Setvices
import * as productService from '../services/productService';
import { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({
    children,
}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productService.getAll().then((result) => {
            setProducts(result);
          });
      }, []);
    return (
        <ProductContext.Provider value={{
            products: products
        }}>
            {children}
        </ProductContext.Provider>  
    );
};