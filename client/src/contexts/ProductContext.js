// import { useEffect, useState} from 'react';


import { createContext } from 'react';
export const ProductContext = createContext();

// export const ProductProvider = ({
//     children,
// }) => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:3030/jsonstore/products/')
//           .then((response) => response.json())
//           .then((result) => {
//             result = Object.values(result);
//             setProducts(result);
//           });
//       }, []);
//       const limitProductsForHome = products.slice(0, 3);

//     return (
//         <ProductContext.Provider value={{
//             products,
//             limitProductsForHome
//         }}>
//             {children}
//         </ProductContext.Provider>  
//     );
// };