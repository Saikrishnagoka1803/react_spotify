import { useState, useEffect } from "react"

const Artist = ({match}) => {

    const [Artist, setArtist] = useState({})

    const Artid = match.params.artid

    useEffect(() =>{
        const fetchArtist = async() => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/'+ id,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MzAzNjg2ODcsImV4cCI6MTYzMTU3ODI4N30.7zF9OMSTNbEUMII8CAYKeF_rwaPxb_G9_eH9vW1IHhk"
                }
            })
            if(response.ok){
                let data = await response.json()
                console.log("Album page", data)

                setsArtist(data)
                console.log(Artist)
                
            }else{
                console.log("Album page ifelse")
            }
                
            } catch (error) {
                console.log(error)
            }

        }
        fetchArtist()
    },[match.params.artid])
    })
    return(
        <h3>hello Iam artist</h3>
    )

}
export default Artist