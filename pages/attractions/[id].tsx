import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
 
type Repo = {
    id: string,
    name: string,
    coverimage: string,
    detail: string
}

const Page = () => {
    const router = useRouter()
    const {id} = router.query

    const [data, setData] = useState<Repo>({
        id: '', name: '', coverimage: '', detail: ''
    })
 
    useEffect(() => {   
        if(id){
            fetch('http://localhost:3000/api/attractions/'+id)
            .then((res) => res.json()).then((data) => {
                setData(data[0])
            })
        }  
    }, [id])
    
    return (
        <div>
            <Container maxWidth="lg">
                <CardMedia
                  sx={{ height: 500 }}
                  image={data.coverimage}
                  title="green iguana"
                />
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {data.detail}
                  </Typography>
            </Container>
        </div>
    )
}

export default Page