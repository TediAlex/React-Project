import * as request from "./requester";

// const baseUrl = 'http://localhost:3030/jsonstore/products';
const baseUrl = 'http://localhost:3030/data/products';






export const getAll = () => {
    return request.get(baseUrl)
}

export const getOne = (productId)  => {
    console.log(productId);
    console.log(`baseUrl/${productId}`)
    return request.get(`${baseUrl}/${productId}`)
}

export const create = (gameData) => {
    return request.post(baseUrl, gameData)
}