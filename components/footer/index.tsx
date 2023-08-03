import { BottomNavigation, BottomNavigationAction, Box, Container, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { AiFillFacebook, AiOutlineAccountBook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import logo from '../../public/logo.svg'
import { useContext, useState } from "react";
import LangContext from "@/contexts/langContext";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import Languge from "../lang";
import AuthBox from "../auth";
export default function Footer() {
    const router = useRouter()
    const { l }:any = useContext(LangContext)
    const [value, setValue] = useState(1)
    const [showLang, setShowLang] = useState(false)
    const [loginBox, setLoginBox] = useState(false)

    const langMenuHamdle = () => {
        setShowLang(!showLang)
        // if (!showLang) {
        //     document.body.classList.add('dark')
        // }else{
        //     document.body.classList.remove('dark')
        // }
    }
        // login box handler
        const handleOpen = () => {
            if (showLang) {
                setShowLang(false)
            }
            setLoginBox(true)
        };
        const handleClose = () => setLoginBox(false);
    return (
        <footer>
                {
                showLang&& 
                <div className="lang-mobile" style={{position:'fixed',bottom:'190px',background:'#ffffff',width:'100vw',display:'block',zIndex:99999999999}}>
                <Languge />
                </div>

                }
                <AuthBox open={loginBox} close={handleClose}/>
            
            <Paper className="d-md-none bm" sx={{ zIndex:99999999999, background:'red', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction onClick={() => langMenuHamdle()} label="Language" icon="EN" />
                    <BottomNavigationAction onClick={()=>router.push('/')} label="Home" icon={<HiHome />} />
                    <BottomNavigationAction onClick={()=> handleOpen()} label="Account" icon={<FaUser />} />
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