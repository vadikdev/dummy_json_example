import React, { useState, useEffect } from 'react';
import Api from "./Api";
import Form from 'react-bootstrap/Form';
import {FormLabel} from "react-bootstrap";

export default function Categories({onSelect}) {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
            Api.categories().then((data) => setCategories(data));
    }, []);

    return (
        <div>
            <FormLabel>Category</FormLabel>
            <Form.Select onChange={(args) => onSelect(args.target.value)}>
                <option></option>
                {null !== categories &&
                    categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
            </Form.Select>
        </div>
    );
}
