// Import Context
import { UserContext } from '../../contexts/UserContext';
// Import Setvices
import * as productService from './../../services/productService'
// Import Default
import styles from './../login/Login.module.css';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const EditProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

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
      navigate(`/products/${product._id}`);
    })
      .catch(() => {
        navigate('/404');
      });
  }

  return (
    <div className={styles['signin']}>
      <div className={styles['back-img']}>
        <div className={styles['sign-in-text']}>
          <h2 className={styles['active']}>Edit Yacht</h2>
        </div>
        <div className={styles['layer']}></div>
        <p className={styles['point']}>&#9650;</p>
      </div>

      <form onSubmit={EditProductionHandler}>
        <div className={styles['form-section']}>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="title">Add Yacht Name</label>
            <input
              className={styles['mdl-textfield__input']}
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Enter a correct Email
            </span>
          </div>
          <div>
            <label htmlFor="category">Choose category:</label>

            <select
              name="category"
              id="category"
              className={styles['mdl-textfield__input']}
              onChange={onChange}
              value={product.category}
            >
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="imageUrl">Add Yacht Image</label>
            <input
              className={styles['mdl-textfield__input']}
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={product.imageUrl}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Enter a correct Email
            </span>
          </div>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="description">Add Yaht Description</label>
            <textarea
              className={styles['mdl-textfield__input']}
              type="text"
              id="description"
              name="description"
              value={product.description}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
            </span>
          </div>
          <p>Add Specifications</p>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="year">Year</label>
            <input
              className={styles['mdl-textfield__input']}
              type="number"
              id="year"
              name="year"
              value={product.year}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
            </span>
          </div>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="capacity">Capacity</label>
            <input
              className={styles['mdl-textfield__input']}
              type="number"
              id="capacity"
              name="capacity"
              value={product.capacity}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
            </span>
          </div>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="cabins">Cabins</label>
            <input
              className={styles['mdl-textfield__input']}
              type="number"
              id="cabins"
              name="cabins"
              value={product.cabins}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
            </span>
          </div>
          <div
            className={
              styles[
                'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
              ]
            }
          >
            <label htmlFor="engine">Engine</label>
            <input
              className={styles['mdl-textfield__input']}
              type="text"
              id="engine"
              name="engine"
              value={product.engine}
              onChange={onChange}
            />
            <span className={styles['mdl-textfield__error']}>
              Minimum 8 characters
            </span>
          </div>
        </div>
        <button
          className={
            styles[
              'sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored'
            ]
          }
        >
          Edit Yacht
        </button>
      </form>
    </div>
  );
};
