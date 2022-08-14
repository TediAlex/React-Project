// Import Components
import { ProductsItems } from './ProductsItems';
// Import Context
import { UserContext } from './../../contexts/UserContext';
// Import Setvices
import * as productService from './../../services/productService'
// Import Default
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import moment from 'moment';

export const ProductDetail = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [productByOwner, setProductByOwner] = useState([]);
 
  useEffect(() => {
    productService.getOne(productId)
      .then((result) => {
        setProduct(result);
      });
    productService.getRelated(user._id, user.accessToken)
      .then((result) => {
        setProductByOwner(result);
      });
  }, [productId, user._id, user.accessToken]);

  const deleteHandler = () => {
    const confirmation = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmation) {
      productService.remove(productId, user.accessToken)
        .then((result) => {
          navigate('/products');
        });
    }
  };
  const formatCreateDate = moment(product._createdOn).format(
    'dddd, MMMM DD, YYYY'
  );
  return (
    <>
      <div className="container">
        <div className="row project-single">
          <div className="col-md-8">
            <div className="project-img">
              <img src={product.imageUrl} alt={product.title} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-info">
              <h3 className="project-title">{product.title}</h3>
              <span className="subtitle">Provide for {product.category}</span>
              <h4 className="subtitle">Price {product.price} €</h4>
              
              <p className="description">{product.description}</p>
              <p className="meta-post">
                <span>Date:</span>
                {formatCreateDate}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="uk-width-medium-1-2">
              <span>
                <img src="https://www.sailmanyachting.com/images/apps/icons/year-manufacturer.png" alt="icons" />
              </span>
              Year: {product.year}
            </div>
            <div className="uk-width-medium-1-2">
              <span>
                <img src="https://www.sailmanyachting.com/images/apps/icons/cabins.png" alt="icons"/>
              </span>
              Cabins: {product.cabins}
            </div>
          </div>
          <div className="col-md-6">
            <div className="uk-width-medium-1-2">
              <span>
                <img src="https://www.sailmanyachting.com/images/apps/icons/capacity.png"  alt="icons"/>
              </span>
              Capacity: {product.capacity}
            </div>
            <div className="uk-width-medium-1-2">
              <span>
                <img src="https://www.sailmanyachting.com/images/apps/icons/engine.png" alt="icons"/>
              </span>
              Engine: {product.engine}
            </div>
          </div>
        </div>
        {user._id === product._ownerId &&
         <div className="row">
         <div className="col-md-6">
           <Link
             to={`/products/${productId}/edit-product`}
           >
             <div className="btn btn-primary edit-button">Edit</div>
           </Link>
         </div>
         <div className="col-md-6">
           <button
             className="btn btn-primary edit-button"
             onClick={deleteHandler}
           >
             Delete
           </button>
         </div>
       </div>
        }       
      </div>
      <div className="related-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2 className="section-title">Related Projects</h2>
                <p className="section-desc">
                  These are some projects from the same owner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {productByOwner.length > 0 ? (
              productByOwner.map((x) => (
                <ProductsItems
                  key={x._id}
                  productId={x._id}
                  category={x.category}
                  title={x.title}
                  imageUrl={x.imageUrl}
                />
              ))
            ) : (
              <p>No Have Added Yahts By This User</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
