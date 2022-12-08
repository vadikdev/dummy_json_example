import express from "express";
import DummyJson from './components/DummyJson.js'

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/products", (req, res) => {
    DummyJson.products(req.query.limit ?? 10,  req.query.skip ?? 0)
        .then((result) => res.json(result))
});

app.get("/api/products/category/:category", (req, res) => {
    DummyJson.productsWithCategory(req.params.category, req.query.limit ?? 10,  req.query.skip ?? 0)
        .then((result) => res.json(result))
});

app.get("/api/products/:id", (req, res) => {
    DummyJson.product(req.params.id)
        .then((result) => res.json(result))
});

app.get("/api/categories", (req, res) => {
    DummyJson.categories()
        .then((result) => res.json(result))
        .catch((reason) => console.log(reason))
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
