import { useState, useEffect } from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Album = ({match}) => {

    const [singleAlbum, setsingleAlbum] = useState({})

    const id = match.params.else

    useEffect(() => {
        const fetchAlbum = async() => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/'+ id,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MzAzNjg2ODcsImV4cCI6MTYzMTU3ODI4N30.7zF9OMSTNbEUMII8CAYKeF_rwaPxb_G9_eH9vW1IHhk"
                }
            })
            if(response.ok){
                let data = await response.json()
                console.log("Album page", data)

                setsingleAlbum(data)
                console.log(singleAlbum)
                
            }else{
                console.log("Album page ifelse")
            }
                
            } catch (error) {
                console.log(error)
            }

        }
        fetchAlbum()
    },[match.params.id])

    return(
        <Container>
            <Row className='Justify-content-center'>

            <div className='d-flex'>
                <div className='mt-5'>
                    <img src={singleAlbum.cover_medium} alt="" style={{height:'25rem',width:'25rem'}}/>
                </div>
                <div className='mt-5 ml-4'>
                    <Link to={'/artist/'+singleAlbum.artist.id}><h3>{singleAlbum.artist.name}</h3></Link>
                 
                 
                </div>
            </div>
              
            </Row>
        </Container>
    )
}

export default Album