import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import logo from '../../public/logo.svg'
export default function Footer() {
    return (
        <footer>
            <Container>
                <Box>
                    <Grid container>
                        <Grid xs={2}>
                            <img src={logo.src}/>
                        </Grid>
                        <Grid xs={10}>
                            <ul style={{maxWidth:'400px'}}>
                                <li><Link href={'/'}>footer link</Link></li>
                                <li><Link href={'/'}>footer link</Link></li>
                                <li><Link href={'/'}>footer link</Link></li>
                            </ul>
                            <div className="clear-fix"></div>
                            
                            <a style={{float:'right'}} href={'/instagram'}><AiFillInstagram /></a>
                            <a style={{float:'right'}} href={'/facebook'}><AiFillFacebook /></a>
                            <br />
                            <div className="clear-fix"></div>

                            <span style={{paddingRight:'10px'}} >Terms of use</span>
                            <span>Privacy policy</span>
                            <div className="clear-fix"></div>
                            <div style={{maxWidth:'400px',float:'right',textAlign:'right'}}>
                                <p>
© 3dsky.org, 2023<br />
designed by omid nami (portalirani.com),<br/>
powered : nextJS</p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </footer>
    )
}