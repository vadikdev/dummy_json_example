import React, {useEffect, useState} from 'react';
import { default as BasePagination } from 'react-bootstrap/Pagination';

export default function Pagination({limit, total, onClick}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        let pages = Math.round(total / limit)
        let pageItems = [];
        for (let number = 1; number <= pages; number++) {
            pageItems.push(
                <BasePagination.Item key={number} onClick={() => onClick(number)}>
                    {number}
                </BasePagination.Item>,
            );
        }

        setItems(pageItems)
    }, []);

    return(
        <div>
            <BasePagination>{items ? items : ''}</BasePagination>
        </div>
    )
}
