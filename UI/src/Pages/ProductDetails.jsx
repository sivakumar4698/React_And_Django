import React, { useState, useEffect }  from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import productimage from '../BackgroundImages/product.png'
import {Row, Col, Image, ListGroup, Button, Card, Container, Dropdown, DropdownButton} from 'react-bootstrap'
import Rating from '../Components/Rating'
//import products from '../StaticContent/Products'
import {FaRunning} from 'react-icons/fa'
import { IconContext } from "react-icons"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Actions/ProductActions'
import Loading from '../Components/Loading'
import Message from '../Components/Message'

import axios from 'axios'


const ProductDetails = () => {

  const [qty, setQty] = useState(1)


  const dispatch = useDispatch()

  const {error, loading, product} = useSelector(state => state.ProductDetails)

  const navigate = useNavigate()

    const {id} = useParams();

    const addToCart = () => {
      navigate (`/cart/${id}?quantity=${qty}`)
    }



  useEffect ( () => {
    dispatch(getProduct(id))

    }
  , [dispatch])
 
  return (
    <div >
            <Container style={{padding:"20px"}}>
            <Link style={{color:"#F29FC7"}} to='/home'>Go back</Link>
            {
       loading ? <Loading />
       : error ? <Message variant="danger">{error}</Message>
       :(
        <div>
       <Row>
                <Col>
                <Card 
          className="mb-2">
        <Card.Img variant="top" src={productimage} />
      </Card>
     </Col>
                <Col className="text-center" style={{paddingTop:"50px"}}>
                <h3 style={{color:"#F29FC7"}}>{product.name}</h3>
                <p><a style={{color:"#F29FC7"}}>Description: </a>{product.description}</p>
                <p><a style={{color:"#F29FC7"}}>Category: </a>{product.category} </p>
                <p><a style={{color:"#F29FC7"}}>Price $ </a>:{' '}{product.price}</p>
                {
                   product.countInStock > 0 ? <p>
                   <IconContext.Provider value={{ color: "#F29FC7", className: "global-class-name" }}>
                   <FaRunning style={{paddingBottom:"2px"}} />
                   </IconContext.Provider>
                   Hurry Up! only {product.countInStock}{' '}left</p> : <p></p>
                }
                <Rating value ={product.rating} text={product.numReviews} color={'#F29FC7'}/>
                <div style={{paddingTop:"30px"}}>
                <center>
                <Card border="#F29FC7" style={{ width: '18rem' }}>
        <Card.Header style={{color:"#F29FC7"}}>Wanna buy the Product?</Card.Header>
        <Card.Body>
          <Card.Text>
         Status:{product.countInStock > 0 ? <p style={{color:"#F29FC7"}}>In Stock</p>: <p style={{color:"#F29FC7"}}>Sorry. The product not available at the moment</p>}
          </Card.Text>
          {product.countInStock > 0 && (
          <div>                                
          <Row className="mb-2">
          
          <Col>select quantity:</Col>
                                                        <Col  className='my-1' >
                                                            <Col
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                              {
                                                                  //creating an array with the number of products available
                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }
                                                                </Col>
                                                                </Col>
                                                                </Row>
                                                                <br />
                                                                <Button onClick={addToCart} style={{backgroundColor:"#F29FC7"}} variant='secondary'>Add to cart</Button>
                                                                </div>  
          )}
          
        </Card.Body>
      </Card>
                </center>
                </div>
                
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            </div>)
}
           
                </Container>
                </div>
  )
}   

export default ProductDetails