import { useState, useEffect } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import Singlecard from "./Singlecard";


const Home = () => {

    const [albums, setalbums] = useState([])
    const [search, setsearch] = useState('selena')

    useEffect(() => {
        const getalbums = async () => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q='+search, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MzAzNjg2ODcsImV4cCI6MTYzMTU3ODI4N30.7zF9OMSTNbEUMII8CAYKeF_rwaPxb_G9_eH9vW1IHhk"
                    }
                })
                if (response.ok) {
                    let data = await response.json()
                    console.log("iam data", data.data)
                    setalbums(data.data)

                }
                else {
                    console.log("ifelse error",)
                }

                console.log("Albums", albums)
            } catch (error) {
                console.log(error.msg)
            }
        }

        getalbums()
    }, [search])

    const handlesearch=(e)=> {
        setsearch(e.target.value) 
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        

    }

    return (

        <Container className='mt-4'>
            <Row >
                <Form onSubmit={handlesubmit}>
                    <div className='d-flex w-60'>
                    <Form.Group className="mb-3" >
                        <Form.Control type="text" placeholder="search artist..." 
                        value={search}
                        onChange={(e) => handlesearch(e)}/>
                     </Form.Group>
                     <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    </div>
                    
                </Form>
            </Row>
            <Row className='mt-4' style={{ display: 'flex' }}>
                {albums.slice(0, 24).map((ele, ind) => (
                    <Col sm={6} md={4} lg={3} key={ind}>
                        <Card style={{ border: '2px solid black', height: '19rem' }} className='mt-2 shadow' >
                            <Singlecard eachAlbum={ele} />
                        </Card>
                    </Col>
                )

                )}
            </Row>


        </Container>
    )

}
export default Home

