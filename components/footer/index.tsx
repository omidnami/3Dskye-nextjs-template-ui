import { BottomNavigation, BottomNavigationAction, Box, Container, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { AiFillFacebook, AiOutlineAccountBook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import logo from '../../public/logo.svg'
import { useContext, useState } from "react";
import LangContext from "@/contexts/langContext";
import { HiHome } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";
export default function Footer() {
    const { l }:any = useContext(LangContext)
    const [value, setValue] = useState(1)
    return (
        <footer>
            <Paper className="d-md-none" sx={{ zIndex:99999999999, background:'red', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="Menu" icon={<FaListUl />} />
                    <BottomNavigationAction label="Home" icon={<HiHome />} />
                    <BottomNavigationAction label="Account" icon={<AiOutlineAccountBook />} />
                </BottomNavigation>
            </Paper>
            <Container>
                <Box>
                    <Grid container>
                        <Grid xs={0} sm={2}>
                            <img src={logo.src}/>
                        </Grid>
                        <Grid xs={12} sm={8}>
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

                            <span style={{paddingRight:'10px'}} >{l.termsOfUse}</span>
                            <span>{l.privacyPolicy}</span>
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