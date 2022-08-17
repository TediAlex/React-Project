const baseUrl = 'http://localhost:3030/data/comments';

export const create = (newComment, userToken) => {
    return fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
          'X-Authorization': `${userToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
}
export const gettAllForProduct = (productId) => {
    return fetch(`${baseUrl}/?where=product%3D%22${productId}%22`, {
        method: 'GET',
        headers: {
        //   'X-Authorization': `${userToken}`,
          'content-type': 'application/json',
        },
        // body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
}
export const editComment = (commentId, userToken, comment) => {
  return  fetch(`${baseUrl}/${commentId}`,{
      method:"PUT",
      headers: {
        'X-Authorization': `${userToken}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(comment)
    })
    .then(response => response.json())
}