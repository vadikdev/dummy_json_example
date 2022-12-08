import fetch from "node-fetch";

const api_domain = 'https://dummyjson.com';

export default {
    products: (limit, skip) => {
        let query = '?limit=' + limit + '&skip=' + skip
        return fetch(api_domain +  '/products' + query)
            .then((res) => res.json())
    },
    productsWithCategory: (category, limit, skip) => {
        let query = '?limit=' + limit + '&skip=' + skip
        return fetch(api_domain +  '/products/category/' + category + query)
            .then((res) => res.json())
    },
    categories: () => {
        return fetch(api_domain + '/products/categories')
            .then((res) => res.json())
    },
    product: (productId) => {
        return fetch(api_domain +  '/products/' + productId)
            .then((res) => res.json())
    },
}
