import { ProductsItems } from "./ProductsItems";
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./../../contexts/ProductContext";
import { UserContext } from "./../../contexts/UserContext";
import * as  productService  from "./../../services/productService";
import React from "react";
import moment from "moment";

export const ProductDetail = (props) => {
  
  const navigate = useNavigate();
  // const { addComment, fetchGameDetails, selectGame, gameRemove } = useContext(GameContext);
  const { user } = useContext(UserContext)
  
  // const { user } = useAuthContext();


  
  const { products } = useContext(ProductContext);
  const {productId} = useParams()
  console.log(productId)
  console.log(user.accessToken)
  const [product, setProduct] = useState([])

  
  useEffect(() => {
    fetch(`http://localhost:3030/data/products/${productId}`,{
      method:"GET",
      headers: {
        'X-Authorization': `${user.accessToken}`,
                    'content-type': 'application/json'
                }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setProduct(result)
    })
},[])

const formatCreateDate = moment(product._createdOn).format('dddd, MMMM DD, YYYY')
// console.log(formatCreateDate)


  return (
    <>
      <div className="container">
        <div className="row project-single">
          <div className="col-md-8">
            <div className="project-img">
              <img
                src={product.imageUrl}
                //   alt="Project Image 1"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-info">
              
              <h3 className="project-title">{product.title}</h3>
              <span className="subtitle">Provide for {product.category}</span>
              <p className="description">
                {product.description}
              </p>
              <p className="meta-post">
              <span>Date:</span>{formatCreateDate}
              </p>
              
             
            </div>
          </div>
        </div>
        <div className="row">
        <div class="uk-width-medium-1-2">
          <a href="/" target="_blank" class="author_social_network">
          <img src="https://www.sailmanyachting.com/images/apps/icons/year-manufacturer.png" />
            </a>Year: 2008</div>
        </div>
      </div>
      <div className="related-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h2 className="section-title">Related Projects</h2>
                <p className="section-desc">
                  These are some projects that you may be interested to see.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {products &&
            products.map(x =>(
              <ProductsItems
              key={x._id}
              category={x.category}
              title={x.title}
              imageUrl={x.imageUrl}
            />
            ))
            }
          </div>
        </div>
      </div>
    </>
  );
};
