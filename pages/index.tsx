
import { Box, Container, Grid } from '@mui/material'
import ProductHover from '../components/card/productHover'
import img from '../public/testcard/5494906.64bd85cac8430.jpeg'
import img2 from '../public/testcard/5512121.64c4019ad16a3.jpeg'
import img3 from '../public/testcard/5509643.64c2e1dccecfd.jpeg'
import img4 from '../public/testcard/5509339.64c2c95c665d2.jpeg'
import img5 from '../public/testcard/5508698.64c2986f9ccc1.jpeg'
import img6 from '../public/testcard/5508391.64c285143b450.jpeg'
import img7 from '../public/testcard/5502267.64c041d21c5be.jpeg'
import img8 from '../public/testcard/5494906.64bd85cac8430.jpeg'
export default function Home() {
  return (
    <Container>
    <main>
      <Box>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <h2 className='heading-title'>New models</h2>
            <Grid container spacing={1}>
            <Grid xs={3}><ProductHover image={ img.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img7.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img2.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img3.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img4.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img5.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img6.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img8.src } title="this title product"/></Grid>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <p>right</p>
          </Grid>
        </Grid>
      </Box>
    </main>
    </Container>

  )
}
