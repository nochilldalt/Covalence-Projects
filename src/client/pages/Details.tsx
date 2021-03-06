import * as React from 'react'
import { useState, useEffect } from 'react';
import { IBook } from '../utils/interfaces';
import { json } from '../utils/api-services';
import { RouteComponentProps } from 'react-router-dom';

const Details: React.FC<DetailsProps> = (props) => {

    const [book, setBook] = useState<IBook>({
        id: 0,
        categoryid: 0,
        title: 'string',
        author: 'string',
        price: 0
    })



    useEffect(() => {
        (async () => {
            try {
                let [book] = await json(`/api/books/${props.match.params.id}`)
                setBook(book)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <div>
            <h1>Details Page</h1>
            <article className="col-md-6" key={`Blog${book.id}`}>
                <h1>{book.title}</h1>
                <h4>By {book.author}</h4>
                <h6>${book.price}</h6>
            </article>
        </div>
    )
}

interface DetailsProps extends RouteComponentProps<{ id: string }> { }

export default Details