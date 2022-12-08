import React, { useState, useEffect } from 'react';
import Api from "../components/Api";
import { Link } from "react-router-dom";

import {Table, Row, Col, Container} from "react-bootstrap";

import Pagination from "../components/Pagination";
import Categories from "../components/Categories";

export default function Home() {
    const [products, setProducts] = useState([]);
    const limit = 10;
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState(null)

    useEffect(() => {
        let skip = limit * (page - 1)
        if (category) {
            Api.productsWithCategory(category, limit, skip).then(onResponse);
        } else {
            Api.products(limit, skip).then(onResponse);
        }
    }, [page, category]);

    const onResponse = (data) => {
        setProducts(data.products)
        setTotal(data.total)
    }
    return (
        <div>
            <Row>
                <Col>
                    <Categories onSelect={setCategory}></Categories>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products &&
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <Link to={"/product/" + product.id}>{product.title}</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination key={total} total={total} limit={limit} onClick={setPage}></Pagination>
                </Col>
            </Row>
        </div>
    );
}
