import React from 'react'
import {Card, Container} from 'react-bootstrap'
import check from '../BackgroundImages/BackgroundImage.png'
import Rating from './Rating'
import {Link} from 'react-router-dom'



const Product = ({product}) => {

   // const navigate = useNavigate()

   // const toproduct = () => {
   //     navigate('/');
   // }


  return (
    <Container style={{padding:"20px"}}>
    <Card  bg="light" className="my-3 p-3 rounded">
            <Link to={`/productinfo/${product._id}`}>
            <Card.Img src={check} />     
            </Link>
            <Card.Body>
            
            <Card.Title as="div">
                        <strong>{product.name}</strong>
            </Card.Title>            
          
                <Card.Text as="div">
                    <div className="my-3">
                        
                        <Rating value={product.rating} text={`${product.numReviews} reviews ` } color={'#F1B3D1'}/>
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
  )
}

export default Product;