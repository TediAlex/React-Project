import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
    return request.post(`${baseUrl}/login`, { email, password });
}
export const registration = (userRegData) => {
    return  fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
          // 'X-Authorization': `${user.accessToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(userRegData),
      })
        .then((response) => response.json())
}

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};
    