import React, { useState, useEffect }  from 'react'
//import { useParams, useNavigate } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../Actions/UserActions'
import BackImage from '../BackgroundImages/register.png'
import {Form, Button, Container, InputGroup, Row, Col, Image, Card} from 'react-bootstrap'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


   const dispatch = useDispatch()
   const navigate = useNavigate()

   const userRegistering = useSelector(state => state.Register)
   const { error, loading, user } = userRegistering

    useEffect(() => {
       if (user) {
            navigate('/cart')
       }
   }, [user, navigate])



    const Register = (e) => {
      e.preventDefault()
      if (password !== confirmpassword){
        setMessage('Passwords do not match')
        
      }
      else{
        dispatch(userRegister(username, password, email, name))
      }
      
    }
    
    

  return (
    <div>
    <Container style={{padding:'100px'}}>
    <h1>Register</h1>
    {message && <Message variant = 'danger'>{message}</Message>}
    {error && <Message variant = 'danger'>{error}</Message>}
    {loading && <Loading />} 
    <br />
    <Row>
    <Col>
    <br />
    <Form onSubmit = {Register}>
    <Row>
        <Col>
        <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control required 
      value= {name}  
      onChange = {(e) => setName(e.target.value)}
      type="text" placeholder="Enter your name"  />
    </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control required 
      value= {email}  
      onChange = {(e) => setEmail(e.target.value)}
      type="email" placeholder="Enter your email" />
    </Form.Group>
        </Col>
    </Row>
    <Form.Group  className="mb-5" controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control required  
            value= {username}  
      onChange = {(e) => setUsername(e.target.value)}
            className="w-50" id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control required  value= {password}  
      onChange = {(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Confirm password</Form.Label>
      <Form.Control required value= {confirmpassword}  
      onChange = {(e) => setConfirmpassword(e.target.value)}
      type="password" placeholder="Password" />
    </Form.Group>
    <Button style={{backgroundColor:"#F29FC7"}} variant='secondary' type='submit'>Submit</Button>
    <br />
    <br />
    <Card.Subtitle className="mb-2 text-muted">Already have an account?<Link style={{color:"#F29FC7"}} to='/login'>{' '}Login</Link></Card.Subtitle>
    </Form>

    </Col>
    <Col>
    <Image style={{width:"500px", paddingLeft:"50px"}}src={BackImage}/>
    </Col>
    </Row>
    
</Container>
</div>
  )

}

export default Register