import React, { useState, useEffect }  from 'react'
//import { useParams, useNavigate } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { userProfile, userUpdateProfile } from '../Actions/UserActions'
import BackImage from '../BackgroundImages/register.png'
import {Form, Button, Container, InputGroup, Row, Col, Image, Card, Modal} from 'react-bootstrap'
import {UPDATE_PROFILE_RESET} from '../ReducerConstants/UserConstants'

const Profile = () => {

    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  



   const dispatch = useDispatch()
   const navigate = useNavigate()

   const UserProfile = useSelector(state => state.Profile)
   const { error, loading, profile } = UserProfile

   const User = useSelector(state => state.User)
   const {user} = User

   const UpdateProfile = useSelector(state => state.UpdateProfile)
   const {success} = UpdateProfile

    useEffect(() => {
       if (!user) {
            navigate('/login')
       }
       else {
            if(!profile || !profile.name || success){
                dispatch({type:UPDATE_PROFILE_RESET})
                dispatch(userProfile('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
       }
   }, [dispatch, user, profile ])

    const Register = (e) => {
      e.preventDefault()
      if (password !== confirmpassword){
        setMessage('Passwords do not match')
        
      }
      else{
        dispatch(userUpdateProfile({
            'id': user._id,
            'name': name,
            'email': email,
            'password': password
        }))
        setMessage('')
        handleClose();
        
}
    }

  return (
    <Container>
    <Row style={{padding:'30px'}}>
        <Col style={{padding:'30px'}} >
        <h3 style={{color:"#F29FC7"}}>User Profile</h3>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
    
        <Card.Title><a style={{color:"#F29FC7"}}>Name: </a>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><a style={{color:"#F29FC7"}}>@Username: </a>{user.username}</Card.Subtitle>
        <Card.Text>
        <a style={{color:"#F29FC7"}}>Email: </a>{user.email}
        </Card.Text>
        {
            user.isAdmin === true ? ( <p>You are an Admin user</p>):(<p></p>)
        }
        <Button style={{backgroundColor:"#F29FC7"}} variant='secondary' onClick={handleShow}>Update?</Button>
      </Card.Body>
    </Card>
    {error && <Message variant = 'danger'>{error}</Message>}
    {loading && <Loading />} 
    <br />
      <Modal style={{color:"#000000"}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit = {Register}>
        {message && <Message variant = 'danger'>{message}</Message>}
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control value= {name}  
      onChange = {(e) => setName(e.target.value)}
      type="text" placeholder="Enter your name"  />
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control  value= {email}  
      onChange = {(e) => setEmail(e.target.value)}
      type="email" placeholder="Enter your email" />
    </Form.Group>
    
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control   value= {password}  
      onChange = {(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Confirm password</Form.Label>
      <Form.Control  value= {confirmpassword}  
      onChange = {(e) => setConfirmpassword(e.target.value)}
      type="password" placeholder="Password" />
    </Form.Group>
    <Button style={{backgroundColor:"#F29FC7"}} variant='secondary' type='submit'>Update</Button>
      </Form>
        </Modal.Body>
      </Modal>
        </Col>
        <Col style={{padding:'30px'}} >
        <h3 style={{color:"#F29FC7"}}>User Orders</h3>
        </Col>
    </Row>
    </Container>
  )
}

export default Profile