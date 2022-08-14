const baseUrl = 'http://localhost:3030/data/userinfo'

export const getInfoForUser = (ownerId) =>{
    return fetch(`${baseUrl}/?where=_ownerId%3D%22${ownerId}%22`,
    {
      method:"GET",
      // headers: {
      //   'X-Authorization': `${user.accessToken}`,
      //               'content-type': 'application/json'
      //           }
    }
    )
    .then(response => response.json())
}


