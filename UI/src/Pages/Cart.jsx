import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
//import { URLSearchParams } from 'react-router-dom';
import { addToCart, filteredCart } from '../Actions/CartActions'
import Message from '../Components/Message'
import {Row, Col, Container, Card,Button, Image, NavItem} from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'
import check from '../BackgroundImages/product.png'

const Cart = ({}) => {
    const {id} = useParams();

   // console.log(queryString.parse(location.search));
    const navigate = useNavigate()

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const qty = params.get('quantity');

    const dispatch = useDispatch()

    const RemoveItemInCart = (id) => {
     dispatch(filteredCart(id))
    }

    const GotoShipping = () => {
      navigate('/shipping')
    }

    const cartdetails = useSelector((state => state.Cart))
    const {cartItems} = cartdetails

    useEffect(() => {
        if(id){
            dispatch(addToCart(id, qty))
        }
    },[dispatch, id, qty])
  return (
    <div>
      <br/>
        <h1  className="text-center" style={{color:"#F29FC7"}}>Shopping Cart</h1>
        <Row style={{padding:"50px"}} >
          <Col>
          {
          cartItems.length === 0 ?
          (<Message variant="warning">Your cart is empty <Link style={{color:"#000000"}} to='/home'>Go Back</Link></Message>):
          (<div>
            {cartItems.map((item) => (
            <Row style={{ padding: '20px' }} >
              <Col>
              <center>
              <div style={{ width: '40rem' }}>
                <Row >
                  <Col>
                  <Image src={check} alt={item.name} fluid rounded />
                  </Col>
                  <Col>
                  <Card.Title  >{item.name}</Card.Title>
                  </Col>
                  <Col>
                  <Card.Text style={{color:"#F29FC7"}}>
         ${item.price}
        </Card.Text>
                  </Col>
                  <Col  className='my-1' >
                                                            <Col
                                                                as="select"
                                                                value={item.qty}
                                                                onChange={(e) => 
                                                                  dispatch(addToCart(item.product,  e.target.value)
                                                                  )
                                                                }
                                                            >
                                                              {
                                                                  //creating an array with the number of products available
                                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                                        <option  key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }
                                                                </Col>
                                                                </Col>
                                                                <Col>
                  <center>
                  <MdDelete  onClick ={() => RemoveItemInCart(item.product)}/>
                  </center>
                  </Col>
                </Row>
    </div>
              </center>
              <hr />
              </Col>
            </Row>))}
              
          </div>)}
          </Col>
          <Col>
              <center>
                <Row>
                <h2>
                Total ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                items:
              </h2>
              
              <h2>
              ${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              </h2>
              <center>
              <Button disabled={cartItems.length === 0} onClick={GotoShipping} style={{backgroundColor:"#F29FC7", width:"200px"}} variant='secondary'>Checkout</Button>
              </center>
                </Row>
              </center>
              </Col>
        </Row>
       
        
    </div>
  )
            }

export default Cart