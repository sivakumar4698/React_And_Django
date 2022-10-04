import React, { useState, useEffect }  from 'react'
//import { useParams, useNavigate } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { userProfile } from '../Actions/UserActions'
import BackImage from '../BackgroundImages/login.png'
import {Form, Button, Container, InputGroup, Row, Col, Image, Card} from 'react-bootstrap'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.User)
    const { error, loading, user } = userLogin

    useEffect(() => {
        if (user) {
            navigate('/cart')
        }
    }, [user])



    const UserLogIn = (e) => {
        e.preventDefault()
        dispatch(userProfile(username, password))
        
    }

  return (
    <div>
    
    <Container style={{padding:'100px'}}>
    <h1>Login</h1>
    <br />  
    {error && <Message variant = 'danger'>{error}</Message>}
    {loading && <Loading />}  
    <Row>
    <Col>
    <br />
    <Form onSubmit = {UserLogIn}>
    <Form.Group  className="mb-5" controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control value= {username} 
            onChange = {(e) => setUsername(e.target.value)}
            className="w-50" id="inlineFormInputGroup" placeholder="Username" />
          </InputGroup>
    </Form.Group>
    <Form.Group className="mb-5" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control value= {password}  
      onChange = {(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" />
    </Form.Group>
    <Button style={{backgroundColor:"#F29FC7"}} variant='secondary' type='submit'>Log In</Button>
    <br />
    <br />
    <Card.Subtitle className="mb-2 text-muted">New User?<Link style={{color:"#F29FC7"}} to='/register'>{' '}Register</Link></Card.Subtitle>
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

export default Login