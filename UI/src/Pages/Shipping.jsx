
import {Form, Button, Container, InputGroup, Row, Col, Image} from 'react-bootstrap'
import BackImage from '../BackgroundImages/shipping.png'
import React, { useState, useEffect }  from 'react'
//import { useParams, useNavigate } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {saveShipping} from '../Actions/CartActions'
import CheckoutProcess from '../Components/CheckoutProcess'

const Shipping = () => {

    const Cart = useSelector(state => state.Cart)
    const {Address} = Cart 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [address, setAddress] = useState(Address.address)
    const [city, setCity] = useState(Address.city)
    const [postalCode, setPostalCode] = useState(Address.postalCode)
    const [country, setCountry] = useState('')


    // {address,city, postalCode, country  } = data
const addAddress = (e) => {
    e.preventDefault()
    dispatch(saveShipping({address, city, postalCode, country}))
    navigate('/payment')
    console.log('Address added')
}
  return (
    <Container>
        <Row style={{padding:'50px'}}>
        <center>
        <h4>Almost there! <a style={{color:"#BAB4B3"}}>Complete the checkout process</a> to place the Order</h4>

        </center>
                    <br />
            <CheckoutProcess step1 step2 />
            <Col>
            <h5 style={{color:"#F29FC7"}}>Shipping Address</h5>
            <br />
            <Form onSubmit = {addAddress}>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control required as="textarea" rows={3} value= {address ? address : ''}  
                 onChange = {(e) => setAddress(e.target.value)}
                 type="text" placeholder="Enter your address"  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control  required value= {city ? city : ''}  
                onChange = {(e) => setCity(e.target.value)}
                type="text" placeholder="Enter City" />
                </Form.Group>
    
                <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control required  value= {postalCode ? postalCode :''}  
                onChange = {(e) => setPostalCode(e.target.value)}
                type="text" placeholder="Enter postal code" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control required value= {country ? country : ''}  
                onChange = {(e) => setCountry(e.target.value)}
                type="text" placeholder="Enter Country" />
                </Form.Group>

                <Button style={{backgroundColor:"#F29FC7"}} variant='secondary' type='submit'>Proceed</Button>
                </Form>
            </Col>
            <Col>
            <Image style={{width:"700px", paddingLeft:"50px"}}src={BackImage}/>
            </Col>
        </Row>
    </Container>

  )
}

export default Shipping