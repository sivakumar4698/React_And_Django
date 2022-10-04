import {Form, Button, Container, InputGroup, Row, Col, Image} from 'react-bootstrap'
import BackImage from '../BackgroundImages/Payment.png'
import React, { useState, useEffect }  from 'react'
//import { useParams, useNavigate } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {savePayment} from '../Actions/CartActions'
import CheckoutProcess from '../Components/CheckoutProcess'

const Payment = () => {

    const Cart = useSelector(state => state.Cart)
    const {Address, Payment} = Cart 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState('paypal')


    if(!Address.address){
        navigate('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
       dispatch(savePayment(paymentMethod))
        navigate('/placeorder')
    }
    
  return (
    <Container>
        <CheckoutProcess step1 step2 step3 />
        <Row style={{padding:'50px'}}>
            <Col>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend' style={{color:'#F29FC7'}}>Select Method</Form.Label>
                    <br />
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            value={paymentMethod}
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                        </Form.Check>
                    <br />
                        <Form.Check
                            type='radio'
                            label='Debit Card (Feature to be added Soon!)'
                            id='debitCard'
                            name='paymentMethod'
                            value={paymentMethod}
                            disabled
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                        </Form.Check>
                    </Col>
                </Form.Group>
                <br />
                <Button style={{backgroundColor:"#F29FC7"}} variant='secondary' type='submit'>Continue</Button>
            </Form>
            </Col>
            <Col>
            <Image style={{width:"700px", paddingLeft:"50px"}}src={BackImage}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Payment