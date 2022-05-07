import React,{ useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Rating from "./Rating";
import { useDispatch, useSelector } from 'react-redux';
import {  deleteProductAction } from '../actions/ProductActions';
import { Link } from 'react-router-dom';
const Product = ({ product}) => {
    const dispatch = useDispatch()

    // useEffect(async() => {
    //     const deleteItem = (resId) => {
       
    //     }
    //     dispatch(listProducts(resId))
    // }, [dispatch])

    const deleteItem = (resId) => {
        let product={
            id:resId
        }
       dispatch(deleteProductAction(product))
    }
    console.log(product)
  
    return (
        
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
            <button onClick={()=>deleteItem(product._id)}>Delete</button>
        </Card>
    )
}

export default Product;