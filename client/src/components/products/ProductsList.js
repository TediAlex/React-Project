// Import Components
import { ProductsItems } from './ProductsItems';
// Import Setvices
import * as productService from './../../services/productService'
// Import Default
import { useEffect, useState } from 'react';

export const ProductsList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    productService.getAll()
    .then(result => {
      setProducts(result)
    })
}, []);
const getAllHandler = () => {
  productService.getAll()
    .then(result => {
      setProducts(result)
    })
}
const getRentHandler = (category) => {
  productService.getByCategory(category)
  .then(result => {
    setProducts(result)
    console.log(result)
  })
}
const getLastAddedHandler =() => {
  productService.getLastAdded()
  .then(result => {
    setProducts(result)
    console.log(result)
  })
}
  return (
    <div className="products-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul id="filters" className="mixitup-controls">
              <li className="filter" data-filter="all" onClick={getAllHandler}>
                All
              </li>
              <li className="filter" data-filter="branding" onClick={() => getRentHandler('rent')}>
                For Rent
              </li>
              <li className="filter" data-filter="illustration" onClick={() => getRentHandler('buy')}>
                For Buy
              </li>
              <li className="filter" data-filter="business" onClick={getLastAddedHandler}>
                Last Added
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products.length > 0 &&
            products.map((x) => (
              <ProductsItems
                key={x._id}
                title={x.title}
                category={x.category}
                imageUrl={x.imageUrl}
                productId={x._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
