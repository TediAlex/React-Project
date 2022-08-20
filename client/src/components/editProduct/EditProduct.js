// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Setvices
import * as productService from './../../services/productService'
//Import Style
import '../../css/forms.css';
// Import Default
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    productService.getOne(productId, user.accessToken)
      .then((result) => {
        setProduct(result);
      });
  }, [productId, user.accessToken]);

  const onChange = (e) => {
    setProduct((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const EditProductionHandler = (e) => { 
    e.preventDefault();
    productService.editProduct(product._id, user.accessToken,product)
    .then(result => {
      toast.success('Successfully Edit Yacht!');
      navigate(`/products/${product._id}`);
    })
    .catch((err) => {
      toast.error(err);
    });
  }
  const [errors, setErrors] = useState({});
  const validText = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: product[e.target.name].length < bound,
    }));
  };
  const validImageUrl = (e) => {
    var imgValidation = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: !imgValidation.test(product[e.target.name]),
    }));
  };
  const isDisabled = !Object.values(errors).some((x) => x);

  return (
    <div className='signin'>
      <div className='back-img'>
        <div className='sign-in-text'>
          <h2 className='active'>Edit Yacht</h2>
        </div>
        <div className='layer'></div>
        <p className='point'>&#9650;</p>
      </div>

      <form onSubmit={EditProductionHandler}>
        <div className='form-section'>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="title">Add Yacht Name</label>
            <input
              className='mdl-textfield__input'
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={onChange}
              onBlur={(e) => validText(e, 3)}
            />
            {errors.title &&
            <span className='mdl-textfield__error'>
             Yacht Name should be at least 3 characters long!
          </span>
            }
            
          </div>
          <div>
            <label htmlFor="category">Choose category:</label>

            <select
              name="category"
              id="category"
              className='mdl-textfield__input'              
              value={product.category}
              onChange={onChange}
            >
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="imageUrl">Add Price</label>
            <input
              className='mdl-textfield__input'
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={onChange}
              onBlur={(e) => validText(e, 1)}
              />
              {errors.price &&
              <span className='mdl-textfield__error'>
              Add valid price.
            </span>
              }
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="imageUrl">Add Yacht Image</label>
            <input
              className='mdl-textfield__input'
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={product.imageUrl}
              onChange={onChange}
              onBlur={(e) => validImageUrl(e)}
              
              />
              {errors.imageUrl && 
              <span className='mdl-textfield__error'>
              Enter a valid image url.
            </span>
              }
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="description">Add Yaht Description</label>
            <textarea
              className='mdl-textfield__input'
              type="text"
              id="description"
              name="description"
              value={product.description}
              onChange={onChange}
              onBlur={(e) => validText(e, 8)}
            />
            {errors.description && 
            <span className='mdl-textfield__error'>
            Minimum 8 characters
          </span>
            }
          </div>
          <p>Add Specifications<span className="optional">*optional</span></p>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="year">Year</label>
            <input
              className='mdl-textfield__input'
              type="number"
              id="year"
              name="year"
              value={product.year}
              onChange={onChange}
            />
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="capacity">Capacity</label>
            <input
              className='mdl-textfield__input'
              type="number"
              id="capacity"
              name="capacity"
              value={product.capacity}
              onChange={onChange}
            />
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="cabins">Cabins</label>
            <input
              className='mdl-textfield__input'
              type="number"
              id="cabins"
              name="cabins"
              value={product.cabins}
              onChange={onChange}
            />
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="engine">Engine</label>
            <input
              className='mdl-textfield__input'
              type="text"
              id="engine"
              name="engine"
              value={product.engine}
              onChange={onChange}
            />
          </div>
        </div>
        <button
         disabled={!isDisabled}
         className={!isDisabled 
           ? "disabled sign-in-btn" 
           : "sign-in-btn"
         }
          >
          Edit Yacht
        </button>
      </form>
    </div>
  );
};
