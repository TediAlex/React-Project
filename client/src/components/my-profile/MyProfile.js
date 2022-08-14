import styles from './MyProfile.module.css';
import '../../css/forms.css';
import { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ProductContext } from './../../contexts/ProductContext';
import { ProductsItems } from './../products/ProductsItems';
import { UserContext } from './../../contexts/UserContext';

export const MyProfile = () => {
  // const navigate = useNavigate();
  const [prodyctsByOwner, setProdyctsByOwner] = useState({});
  const [addInUser, setAddInUser] = useState({
    description: '',
    imageUrl: '',
    age:'',
    town: '',
    phone: '',
  });
  const { user } = useContext(UserContext);
  useEffect(() => {
    fetch(
      `http://localhost:3030/data/products?where=_ownerId%3D%22${user._id}%22`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setProdyctsByOwner(result);
      });

      fetch(`http://localhost:3030/data/userinfo?where=_ownerId%3D%22${user._id}%22`,
      {
        method:"GET",
        // headers: {
        //   'X-Authorization': `${user.accessToken}`,
        //               'content-type': 'application/json'
        //           }
      }
      )
      .then(response => response.json())
      .then(result => {
        setAddInUser(result)
          console.log(result)
      })


  }, [user._id]);
  const [isActive, setIsActive] = useState(false);
  const addMoreInforHandler = () => {
    setIsActive((current) => !current);
  };
  const onChange = (e) => {
    setAddInUser((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
  }
  console.log(user)

  const newLoginData = {
        ...user, 
    moreInfo:addInUser

  }
 

  const addMoreInfo = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3030/data/userinfo?where=_ownerId%3D%22${user._id}%22`,
    {
      method:"POST",
      headers: {
        'X-Authorization': `${user.accessToken}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newLoginData)
    }
    )
    .then(response => response.json())
    .then(result => {
        console.log(result)
        setAddInUser({})
        setIsActive(false)
    })
  }
  const closeMoreInfo = () => {
    setIsActive(false)
    console.log("hhh")
  }
  const editMoreInforHandler = () => {
    setIsActive((current) => !current);
  }
  let isEmpty = Object.values(newLoginData.moreInfo).some(v => v)
  console.log(newLoginData.moreInfo)

  return (
    <div className={styles['profile']} >
      <div id="about_us" className="container">
        <div className={`${styles['session-title']} row`}>
          <h2>About Me</h2>
          <div className={styles['heading-line']}></div>
        </div>
        <div className={`${styles['about-row']} row`}>
          <div className={`${styles['image-col']} col-md-4`}>
            <img alt="profileImage"  src={addInUser.imageUrl ? addInUser.imageUrl : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'} />
            
            {!isEmpty 
            ? (<button
                type="button"
                onClick={addMoreInforHandler}
                className={`${styles['buttonAdd']} btn btn-primary`}
              >
                Add More Info
              </button>)
             
              : (<button
                type="button"
                onClick={editMoreInforHandler}
                className={`${styles['buttonAdd']} btn btn-primary`}
              >
                Edit Info
              </button>)
            }
            
          </div>
          <div
            className={isActive ? `${styles['show']}` : `${styles['overlay']}`}
            
          >
            <div className={styles['backdrop']} onClick={closeMoreInfo}></div>
            <div className={`${styles['signin']} signin`}>
              <form onSubmit={addMoreInfo}>
                <div className={`${styles['form-section']} form-section`}>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <textarea
                      className="mdl-textfield__input"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Discription"
                        value={addInUser.description}
                        onChange={onChange}
                    />
                    <span className="mdl-textfield__error">
                      Enter a correct Email
                    </span>
                  </div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                      placeholder="Your Image"
                        value={addInUser.imageUrl}
                        onChange={onChange}
                    />
                    <span className="mdl-textfield__error">
                      Minimum 8 characters
                    </span>
                  </div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      type="number"
                      id="age"
                      name="age"
                      placeholder="Your Age"
                        value={addInUser.age}
                        onChange={onChange}
                    />
                    <span className="mdl-textfield__error">
                      Minimum 8 characters
                    </span>
                  </div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="town"
                      name="town"
                      placeholder="Your Town"
                        value={addInUser.town}
                        onChange={onChange}
                    />
                    <span className="mdl-textfield__error">
                      Minimum 8 characters
                    </span>
                  </div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                        value={addInUser.phone}
                        onChange={onChange}
                    />
                    <span className="mdl-textfield__error">
                      Minimum 8 characters
                    </span>
                  </div>
                </div>

                <button className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
                  Add More Information
                </button>
              </form>
            </div>
          </div>
          <div className={`${styles['detail-col']} col-md-8`}>
            <h2>{user.username}</h2>
            <p>{addInUser.description}</p>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className={styles['info-list']}>
                  <ul>
                    {addInUser.town &&
                     (<li>
                      <span>City:</span>{addInUser.town}
                    </li>)
                    }
                     {user.email &&
                     (<li>
                        <span>Email:</span>
                        {user.email}
                      </li>)
                    }
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="info-list">
                  <ul>
                  {addInUser.age &&
                     <li>
                     <span>Age:</span>{addInUser.age} Years
                   </li>
                    }
                    {addInUser.phone &&
                     <li>
                     <span>Phone:</span>{addInUser.phone}
                   </li>
                    }

                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="services container">
        {/* <div className="container"> */}
       
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

        {/* </div> */}
      </div>
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
