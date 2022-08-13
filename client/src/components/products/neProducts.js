import { useEffect, useState, useContext } from 'react';
// import { useContext } from 'react';

import * as productService from '../../services/productService';

import { ProductsItems } from './ProductsItems';

export const Products = () => {
  const [products, setProducts] = useState([]);


  
  console.log(products);
//   const limitProductsForHome = products.slice(0, 3);
  return (
    <div className="container">
      <div className="row">
        {products.length > 0 &&
          products.map((x) => (
            <ProductsItems
              key={x._id}
              title={x.title}
              category={x.category}
              imageUrl={x.imageUrl}
            />
          ))}
      </div>
    </div>
  );
};
