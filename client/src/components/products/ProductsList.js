import { useEffect, useState, useContext } from 'react';
// import { useContext } from 'react';

import * as productService from './../../services/productService';
import { ProductContext } from './../../contexts/ProductContext';
import { ProductsItems } from './ProductsItems';
export const ProductsList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
    <div  className="container">	
		<div  className="row">
			<div  className="col-md-12">
				<ul id="filters"  className="mixitup-controls">
					<li  className="filter" data-filter="all">All</li>
					<li  className="filter" data-filter="branding">Branding</li>
					<li  className="filter" data-filter="illustration">Illustration</li>
					<li  className="filter" data-filter="business">Business</li>
					<li  className="filter" data-filter="identity">Identity</li>
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
