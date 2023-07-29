
import { Box, Container, Grid } from '@mui/material'

export default function Home() {
  return (
    <Container>
    <main>
      <Box>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <h2 className='heading-title'>New models</h2>
            <Grid container spacing={1}>
              <Grid xs={3}>1</Grid>
              <Grid xs={3}>2</Grid>
              <Grid xs={3}>3</Grid>
              <Grid xs={3}>4</Grid>
              <Grid xs={3}>5</Grid>
              <Grid xs={3}>6</Grid>
              <Grid xs={3}>7</Grid>
              <Grid xs={3}>8</Grid>
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
