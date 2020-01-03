import * as React from 'react'
import { useState, useEffect } from 'react';
import { json } from '../utils/api-services';
import { RouteComponentProps } from 'react-router';

const Add: React.FC<AddProps> = () => {

    const [categoryid, setCategroyid] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [price, setPrice] = useState<number>(0)

    

    useEffect(() => {
        (async () => {
            try {

            } catch (error) {

            }
        })
    })

    const submitBook = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            let msg:any = await json('api/books', 'POST', {
                categoryid,
                title, 
                author,
                price
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Add Page</h1>
            <form>
                {/* <input type="number" value={categoryid} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setCategroyid(e.target.value)} /> */}
                <input type="text" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)} />
                <input type="text" value={author} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setAuthor(e.target.value)} />
                <button onClick={submitBook} > Add Book</button>
            </form>
        </div>
    )
}

interface AddProps extends RouteComponentProps { }

export default Add