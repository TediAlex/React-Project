// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Setvices
import * as productService from './../../services/productService'
// Import Styles
import '../../css/forms.css'; 
// Import Default
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const CreateProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [newProduct, setNewProduct] = useState({
    title: '',
    category: 'rent',
    price: '',
    imageUrl: '',
    description: '',
    year: '',
    capacity: '',
    cabins: '',
    engine: '',
    isFormValid: false
  });
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setNewProduct((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };  
  const addNewProductHandler = (e) => {
    e.preventDefault();
    productService.create(newProduct, user.accessToken)
      .then((result) => {
        navigate('/products');
        setErrors({})
      })
      .catch(() => {
        navigate('/404');
      });
  };

  const validText = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: newProduct[e.target.name].length < bound,
      isFormValid: true
    }));
  };
  const validImageUrl = (e) => {
    var imgValidation = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
    setErrors((state) => ({
      ...state,
      [e.target.name]: !imgValidation.test(newProduct[e.target.name]),
      isFormValid: true
    }));
  };
  console.log(newProduct)
  const isDisabled = Object.values(errors).some((x) => x);
  console.log(isDisabled)
  return (
    <div className='signin'>
      <div className='back-img'>
        <div className='sign-in-text'>
          <h2 className='active'>Create New Yacht</h2>
        </div>
        <div className='layer'></div>
        <p className='point'>&#9650;</p>
      </div>
      <form onSubmit={addNewProductHandler}>
        <div className='form-section'>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="title">Add Yacht Name</label>
            <input
              className='mdl-textfield__input'
              type="text"
              id="title"
              name="title"
              value={newProduct.title}
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
              onChange={onChange}
              value={newProduct.category}
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
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
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
              value={newProduct.imageUrl}
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
              type="password"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={onChange}
              onBlur={(e) => validText(e, 8)}
            />
            {errors.description && 
            <span className='mdl-textfield__error'>
            Minimum 8 characters
          </span>
            }
            
          </div>
          <p>Add Specifications
          <span className="optional">*optional</span>
          </p>
          
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="year">Year</label>
            <input
              className='mdl-textfield__input'
              type="number"
              id="year"
              name="year"
              value={newProduct.year}
              onChange={onChange}
            />
            {/* <span className='mdl-textfield__error'>
              Minimum 8 characters
            </span> */}
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="capacity">Capacity</label>
            <input
              className='mdl-textfield__input'
              type="number"
              id="capacity"
              name="capacity"
              value={newProduct.capacity}
              onChange={onChange}
            />
            {/* <span className='mdl-textfield__error'>
              Minimum 8 characters
            </span> */}
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="cabins">Cabins</label>
            <input
              className='mdl-textfield__input'
              type="number"
              id="cabins"
              name="cabins"
              value={newProduct.cabins}
              onChange={onChange}
            />
            {/* <span className='mdl-textfield__error'>
              Minimum 8 characters
            </span> */}
          </div>
          <div
            className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <label htmlFor="engine">Engine</label>
            <input
              className='mdl-textfield__input'
              type="text"
              id="engine"
              name="engine"
              value={newProduct.engine}
              onChange={onChange}
            />
            {/* <span className='mdl-textfield__error'>
              Minimum 8 characters
            </span> */}
          </div>
        </div>
        <button disabled={!isDisabled}
          className='sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored'>
          Add Yacht
        </button>
      </form>
    </div>
  );
};
