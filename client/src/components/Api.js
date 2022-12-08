export default {
    products: (limit, skip) => fetch("/api/products?limit=" + limit + "&skip=" + skip)
        .then((res) => res.json()),
    productsWithCategory: (category, limit, skip) => fetch("/api/products/category/" + category + "?limit=" + limit + "&skip=" + skip)
        .then((res) => res.json()),
    categories: () => fetch("/api/categories")
        .then((res) => res.json()),
    product: (id) => fetch("/api/products/" + id)
        .then((res) => res.json()),
}
