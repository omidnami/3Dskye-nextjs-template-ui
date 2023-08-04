import { Avatar } from "@mui/joy"
import { Container, Grid } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Show() {
    const router = useRouter()
    // const 
    const pid = router.query.slug
    return (
        <main>
            <Container>
                <Grid container spacing={3}>
                    <Grid xs={8}>
                    </Grid>
                    <Grid xs={4}>
                    <Avatar sx={{display: '-webkit-inline-box', marginRight:'12px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="md" />
                            <span style={{marginTop:'-12px', display:'block'}}>omid nami
                            </span> 
                    </Grid>
                </Grid>
            </Container>
        </main>
        
    )
}