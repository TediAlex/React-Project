import * as request from './requester';
const baseUrl = 'http://localhost:3030/data/comments';


export const create = (newComment, userToken) => {
  return request.post(`${baseUrl}`, newComment);
};

export const gettAllForProduct = (productId) => {
  return request.get(`${baseUrl}?where=product%3D%22${productId}%22&sortBy=_createdOn%20desc`);
};

export const editComment = (commentId, userToken, comment) => {
  return request.put(`${baseUrl}/${commentId}`, comment);
};
 
export const remove = (commentId, userToken) => {
  return request.del(`${baseUrl}/${commentId}`);
};