//import { useState } from "react";
import {  Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Singlecard = ({eachAlbum}) => {


    return (
        <>
            
            <Link to={'/album/'+ eachAlbum.album.id}>
                   <Card.Img
                        variant="top"
                        src={eachAlbum.album.cover_medium}
                        className='img-fluid'
                        style={{objectFit: 'cover', height:'14rem'}}
                    /> </Link>
                    <Card.Body className='text-muted'>
                        <Card.Title>{eachAlbum.title}</Card.Title>

                    </Card.Body>
              
          
        </>
    )
}
export default Singlecard