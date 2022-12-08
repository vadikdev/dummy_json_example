import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Api from "../components/Api";
import {Card, Row, Col, Image, ListGroup} from "react-bootstrap";

import CurrencyFormat from 'react-currency-format';

export default function Product() {
    const [product, setProduct] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        Api.product(id).then((data) => setProduct(data));
    }, []);

    return product ? (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            Price: <CurrencyFormat value={product.price / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </ListGroup.Item>
                        <ListGroup.Item>Discount: {product.discountPercentage}%</ListGroup.Item>
                        <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
                        <ListGroup.Item>In Stock: {product.stock}</ListGroup.Item>
                        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
                        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                {product.images.map((image) => (
                    <Image key={image} src={image}></Image>
                ))}
            </Col>
        </Row>
    ) : '';
}
