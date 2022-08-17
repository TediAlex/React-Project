import * as request from './requester';
const baseUrl = 'http://localhost:3030/data/products';

export const getAll = () => {
  return request.get(`${baseUrl}`);
};

export const getproductsForHome = () => {
  return request.get(`${baseUrl}?pageSize=3?sortBy=_createdOn%20`);
};

export const getOne = (productId, userToken) => {
  return request.get(`${baseUrl}/${productId}`);
};

export const getRelated = (userId, userToken) => {
  return request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22&pageSize=3`);
};

export const getAllOwnerProcucts = (userId) => {
  return request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
};

export const remove = (productId, userToken) => {
  return request.del(`${baseUrl}/${productId}`);
};

export const create = (newProduct, userToken) => {
  return request.post(`${baseUrl}`, newProduct);
};

export const editProduct = (productId, userToken, product) => {
  return request.put(`${baseUrl}/${productId}`, product);
};

export const getByCategory = (category) => {
  return request.get(`${baseUrl}?where=category%3D%22${category}%22`);
};

export const getLastAdded = (category) => {
  return request.get(`${baseUrl}?sortBy=_createdOn%20`);
};
