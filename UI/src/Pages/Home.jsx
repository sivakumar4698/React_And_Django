import React, { useState, useEffect }  from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Product from '../Components/Product'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import BackImage from '../BackgroundImages/Mproject.png'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Actions/ProductActions'

const Home = () => {

  const dispatch = useDispatch()

  const {error, loading, products} = useSelector(state => state.productList)

  
  useEffect ( () => {
      dispatch(getProducts())
  }, [dispatch])

  return (
    <div >
    <Container>
      <br />
    <h1 style={{color:"#F29FC7"}} className="text-center">New Collections</h1>
    {
       loading ? <Loading />
       : error ? <Message variant="danger">{error}</Message>
       :
       <Row>
        {products.map(product =>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product key={product._id} product={product} />
            </Col>  
        ))}
    </Row>
    }
    </Container>
    </div>
  )
}

export default Home