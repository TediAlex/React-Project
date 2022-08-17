// Import Components
import { ProductsItems } from '../products/ProductsItems';
import { TeamList } from '../team/TeamList';
// Import Setvices
import * as productService from './../../services/productService';
// Import Default
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [productsListOf, setProductsListOf] = useState([]);
  useEffect(() => {
    productService.getproductsForHome()
    .then(result => {
      setProductsListOf(result)
    })
}, []);
  return (
    <>
      <section id="homeIntro" className="parallax first-widget">
        <div className="parallax-overlay">
          <div className="container home-intro-content">
            <div className="row">
              <div className="col-md-12">
                <h2>A SUPERB DAY OF SAILING</h2>
                <p>
                Enjoy a tailor-made cruise without worrying about transportation, timetables, luggage or booking accommodation.


                </p>
                <Link className="large-button white-color" to={`/products`}>Choose Yachts </Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark-content ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2 className="section-title">SAILMAN TRAVEL & YACHTING</h2>
                {/* <p className="section-desc">
                  Everything you need to create a professional website.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {productsListOf.length > 0 &&
              productsListOf.map((x) => (
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
      </section>
      <TeamList />
    </>
  );
};
