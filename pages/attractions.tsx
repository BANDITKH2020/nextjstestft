import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {Button, Card, CardActions, CardContent, CardMedia, Container , Grid, Typography} from '@mui/material';
 
type Repo = {
  id: string,
  name: string,
  coverimage: string,
  detail: string
}
 
export const getServerSideProps = (async (context) => {
  const res = await fetch('http://localhost:3000/api/attractions')
  const repo : Repo[] = await res.json()
  return { props: { repo } }


}) 
 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {repo.map(attractions => (
            <Grid item xs={4} md={4} key={attractions.id}>
                

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={attractions.coverimage}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {attractions.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {attractions.detail}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"><a href={`http://localhost:3000/attractions/${attractions.id}`}>SHARE</a></Button>
                  <Button size="small"></Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  )
}