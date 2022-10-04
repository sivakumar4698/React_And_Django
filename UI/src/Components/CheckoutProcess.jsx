import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {MdLocalShipping} from 'react-icons/md'
import { IconContext } from "react-icons";
import {BiLogIn} from 'react-icons/bi'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'

function CheckoutProcess({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>
                        <IconContext.Provider value={{ color: "#F29FC7", className: "global-class-name" }}>
                            <BiLogIn style={{paddingBottom:"2px"}} /></IconContext.Provider>
                            <a style={{color: "#F29FC7"}}>{' '}Login</a>
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled> <BiLogIn style={{paddingBottom:"2px"}} />Login</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>
                        <IconContext.Provider value={{ color: "#F29FC7", className: "global-class-name" }}>
                            <MdLocalShipping style={{paddingBottom:"2px"}} /></IconContext.Provider>
                            <a style={{color: "#F29FC7"}}>{' '}Shipping</a></Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled><MdLocalShipping style={{paddingBottom:"2px"}} />{' '}Shipping</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>
                        <IconContext.Provider value={{ color: "#F29FC7", className: "global-class-name" }}>
                            <RiSecurePaymentLine style={{paddingBottom:"2px"}} /></IconContext.Provider>
                            <a style={{color: "#F29FC7"}}>{' '}Payment</a>
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>  <RiSecurePaymentLine style={{paddingBottom:"2px"}} />Payment</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>
                        <IconContext.Provider value={{ color: "#F29FC7", className: "global-class-name" }}>
                            <TiTick style={{paddingBottom:"2px"}} /></IconContext.Provider>
                            <a style={{color: "#F29FC7"}}>{' '}PlaceOrder</a>
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled><TiTick style={{paddingBottom:"2px"}} />Place Order</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutProcess