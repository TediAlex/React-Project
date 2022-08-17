// import * as request from './requester';
const baseUrl = 'http://localhost:3030/data/products';

export const getAll = () => {
  return fetch(`${baseUrl}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());
};

export const getproductsForHome = () => {
  return fetch(`${baseUrl}?pageSize=3?sortBy=_createdOn%20`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());
};

export const getOne = (productId, userToken)  => {
    return fetch(`${baseUrl}/${productId}`, {
      method: 'GET',
      headers: {
        // 'X-Authorization': `${userToken}`,
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
}
export const getRelated = (userId, userToken) =>{
    return fetch(
        `http://localhost:3030/data/products?where=_ownerId%3D%22${userId}%22&pageSize=3`,
        {
          method: 'GET',
          headers: {
            'X-Authorization': `${userToken}`,
            'content-type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
}
export const getAllOwnerProcucts = (userId) => {
  return fetch(
    `http://localhost:3030/data/products?where=_ownerId%3D%22${userId}%22`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
}
export const remove = (productId, userToken) => {
    return  fetch(`http://localhost:3030/data/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'X-Authorization': `${userToken}`,
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
}

export const create = (newProduct, userToken) => {
    return fetch('http://localhost:3030/data/products', {
        method: 'POST',
        headers: {
          'X-Authorization': `${userToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => response.json())
}
export const editProduct = (productId, userToken, product) => {
    return  fetch(`http://localhost:3030/data/products/${productId}`,{
        method:"PUT",
        headers: {
          'X-Authorization': `${userToken}`,
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(product)
      })
      .then(response => response.json())
}

export const getByCategory = (category) => {
  return fetch(
    ` http://localhost:3030/data/products/?where=category%3D%22${category}%22`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
}
export const getLastAdded = () =>{
  return fetch(
    `http://localhost:3030/data/products?sortBy=_createdOn%20`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
  
}