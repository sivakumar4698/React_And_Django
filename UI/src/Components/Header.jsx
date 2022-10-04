import React, {useEffect } from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {BsEmojiSunglassesFill} from 'react-icons/bs'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {IoMdCart} from 'react-icons/io'
import {BiLogIn} from 'react-icons/bi'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogout } from '../Actions/UserActions'
import { useNavigate } from 'react-router-dom'




const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(UserLogout())
    navigate('/home')
    console.log('loggedout')
  }

  const userLogin = useSelector(state => state.User)
const { error, loading, user } = userLogin

useEffect ( () => {
  }
, [user])

  return (
    <div>
        <Navbar bg="light">
        <Container >
          <LinkContainer to='/home'>
          <Navbar.Brand>
            <BsEmojiSunglassesFill style={{paddingBottom:"2px"}}/>{' '} BeCool
          </Navbar.Brand>
          </LinkContainer>
          <Nav className="justify-content-end">
          <LinkContainer to='/cart'>
           <Nav.Link> <IoMdCart style={{paddingBottom:"2px"}}/> Cart</Nav.Link>
           </LinkContainer>
           {
            user  ?  (
              <NavDropdown title={user.username} id='username'>
            <LinkContainer to='/profile'>
           <NavDropdown.Item> <CgProfile style={{paddingBottom:"2px"}}/> Profile</NavDropdown.Item>
           </LinkContainer>
           <NavDropdown.Item onClick={logoutUser}> <CgLogOut style={{paddingBottom:"2px"}}/>Logout</NavDropdown.Item>
              </NavDropdown>
              
            ): (<LinkContainer to='/login'>
            <Nav.Link ><BiLogIn style={{paddingBottom:"2px"}}/> Login</Nav.Link>
            </LinkContainer>)
           }
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;