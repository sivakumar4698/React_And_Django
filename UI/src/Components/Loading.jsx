import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
  return (
    <Spinner animation="border" role="status"
    style ={{
        height:'100px',
        width: '100px',
        margin: 'auto',
        display: 'block'
    }}
    >
        <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loading