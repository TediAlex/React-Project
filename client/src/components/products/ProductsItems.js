// Import Default
import { Link } from 'react-router-dom';
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
                <span className="fancybox" >
                  {title}
                </span>
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
