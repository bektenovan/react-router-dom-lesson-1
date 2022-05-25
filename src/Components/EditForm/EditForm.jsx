import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({ getOneProduct, oneProduct, updateProducts }) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const params = useParams()
    useEffect(() => {
        getOneProduct(params.id)
    }, [])
    // console.log(oneProduct);

    useEffect(() => {
        if (oneProduct) {
            setTitle(oneProduct.title)
            setPrice(oneProduct.price)
            setImage(oneProduct.image)
        }
    }, [oneProduct])

    function handleValues() {
        let editedProduct = {
            title,
            price,
            image
        }
        console.log("check");
        updateProducts(params.id, editedProduct)
    }



    return (
        <div className='container'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' type="text" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' type="text" />
            <input value={image} onChange={(e) => setImage(e.target.value)} placeholder='image' type="text" />
            <Link to='/'>
                <button onClick={() => handleValues()} >Save</button>
            </Link>

        </div>
    );
};

export default EditForm;