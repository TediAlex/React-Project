import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './../login/Login.module.css';

import * as productService from '../../services/productService';
import { UserContext } from '../../contexts/UserContext';

export const CreateProduct = () => {
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [newProduct, setNewProduct] = useState({
    title: '',
    category: 'rent',
    imageUrl: '',
    description: '',
        year: "",
        capacity: "",
        cabins: "",
        engine: ""
    
  });
  const onChange = (e) => {
    setNewProduct((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  //   setValue((oldValues) => ({
  //     ...oldValues,
  //     [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  // }))
  };
    const [userData, setUserData] = useState({});
  const addNewProductHandler = (e) => {
    e.preventDefault();
    console.log(newProduct)
    fetch('http://localhost:3030/data/products',{
      method:"POST",
      headers: {
        'X-Authorization': `${user.accessToken}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(result => {
      setUserData(result)
      console.log(result)
      // navigate('/');
    })
      .catch(() => {
        navigate('/404');
      });
  };

  return (
    <div className={styles['signin']}>
      <div className={styles['back-img']}>
        <div className={styles['sign-in-text']}>
          <h2 className={styles['active']}>Create New Yacht</h2>
        </div>
        <div className={styles['layer']}></div>
        <p className={styles['point']}>&#9650;</p>
      </div>

      <form onSubmit={addNewProductHandler}>
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
              value={newProduct.title}
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
              value={newProduct.category}
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
              value={newProduct.imageUrl}
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
              type="password"
              id="description"
              name="description"
              value={newProduct.description}
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
              value={newProduct.year}
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
              value={newProduct.capacity}
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
              value={newProduct.cabins}
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
              value={newProduct.engine}
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
          Add Yacht
        </button>
      </form>
    </div>
  );
};
