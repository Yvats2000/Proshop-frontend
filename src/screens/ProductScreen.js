import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../component/Rating'
import {listProductDetails} from '../actions/ProductActions'
import ProductForm from '../component/ProductForm';

// import Product from '../Product';
// import  {Product} from '../Services/GetProducts';


const ProductScreen = () => {
    const { id } = useParams()
    const [edit, setedit] = useState(false);
    const Productdetails = useSelector(state =>state.productDetails)
    console.log(Productdetails)
    const {loading, error, product} = Productdetails;
    // console.log(loading, error, product)
    const dispatch = useDispatch()
    useEffect(async() => {
        await dispatch(listProductDetails(id))
    }, [dispatch])
    // const product = product.find((p) => p._id === id)
    const openModal = () => {
        setedit(true)
    }
    const closeModal = () => {
        setedit(false)
    }
    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                Go back
            </Link>
            <button onClick={openModal}>Edit</button>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroup.Item>
                            Price: ₹{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0} >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            {edit ? <ProductForm closeModal={closeModal}  product={product}/> : null}
        </>
    )
}

export default ProductScreen;
