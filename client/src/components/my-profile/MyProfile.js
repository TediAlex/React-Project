// Import Components
import { ProductsItems } from './../products/ProductsItems';
// Import Context
import { UserContext } from './../../contexts/UserContext';
//Import Services
import * as productService from './../../services/productService';
// import * as userInfoService from './../../services/userInfoService';
//Import Style
import styles from './MyProfile.module.css';
import '../../css/forms.css';
//Import Default
import { useContext, useEffect, useState } from 'react';
export const MyProfile = () => {
  // const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [prodyctsByOwner, setProdyctsByOwner] = useState({});

  
  useEffect(() => {
    productService.getAllOwnerProcucts(user._id)
      .then((result) => {
        setProdyctsByOwner(result);
      });     
  }, [user._id]);
  return (
    <div className={styles['profile']} > 
      <div id="services" className="services container">
        <div className={`${styles['session-title']} row`}>
          <h2>My Added Yahts</h2>
          <div className={styles['heading-line']}></div>
        </div>
        <div className="row">
          {prodyctsByOwner.length > 0 ? (
            prodyctsByOwner.map((x) => (
              <ProductsItems
                key={x._id}
                title={x.title}
                category={x.category}
                imageUrl={x.imageUrl}
                productId={x._id}
              />
            ))
          ) : (
            <p className={styles['no-added']}>No Have Added Yahts</p>
          )}
        </div>
      </div>
    </div>
  );
};
