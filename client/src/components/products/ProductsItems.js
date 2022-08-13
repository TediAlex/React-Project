import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from './../../contexts/ProductContext';
export const ProductsItems = ({ title,  category,  imageUrl, productId }) => {
  return (
    <div className="item col-md-4">
      <div className="thumb-post">
      <Link className="fancybox" to={`/products/${productId}`}>
        <div className="overlay">
          <div className="overlay-inner">
            <div className="portfolio-infos">
              <span className="meta-category">{category}</span>
              <h3 className="portfolio-title">
                <a className="fancybox" >
                  {title}
                </a>
              </h3>
            </div>
          </div>
        </div>
        <img src={imageUrl} alt={title} />
        </Link>
      </div>
    </div>
  );
};
