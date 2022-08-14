// Import Components
import { ProductsItems } from '../products/ProductsItems';
import { TeamList } from '../team/TeamList';
// Import Setvices
import * as productService from './../../services/productService';
// Import Default
import { useEffect, useState } from 'react';

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
                <h2>Choose the Optimal Workspace for Your Business</h2>
                <p>
                  We asked six entrepreneurs with drastically different office
                  strategies for their advice on
                  <br /> choosing a workspace.
                </p>
                <a href="/" className="large-button white-color">
                  Download Free <i className="icon-button fa fa-download" />
                </a>
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
                <h2 className="section-title">Our Lovely Portfolio</h2>
                <p className="section-desc">
                  Everything you need to create a professional website.
                </p>
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
