import { Box, Container, Hidden, ListItemIcon, Modal, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { HiLogout, HiOutlineX, HiSearch } from 'react-icons/hi'
import Link from 'next/link';
import logo  from "../../public/logo.svg";
import { useContext, useEffect, useState } from 'react';
import Languge from '../lang';
import LangContext from '@/contexts/langContext';
import AuthBox from '../auth';
import { useRouter } from 'next/router';
export default function Header() {
    const router = useRouter()
    const { l }:any = useContext(LangContext)
    const [lang, setLang] = useState('')
    const [loginBox, setLoginBox] = useState(false)


    useEffect(() => {
        const lan:any = localStorage.getItem('lang')
        setLang(lan)
    }, [lang])

    const [showLang, setShowLang] = useState(false)
    const [search, setSearch] = useState('')

    const searchClickHandle = () => {
        document.body.classList.add('dark')
        setShowLang(false)
    }
    const searchBlurkHandle = () => {
        document.body.classList.remove('dark')
        setShowLang(false)
    }
    const clearSearchHandle = () => {
        setSearch('')
    }
    const searchButtonHandle = () => {
        if (search) {
            alert(search)
        }
    }
    // login box handler
    const handleOpen = () => {
        if (showLang) {
            setShowLang(false)
        }
        setLoginBox(true)
    };
    const handleClose = () => setLoginBox(false);

    const langMenuHamdle = () => {
        setShowLang(!showLang)
        // if (!showLang) {
        //     document.body.classList.add('dark')
        // }else{
        //     document.body.classList.remove('dark')
        // }
    }
    return (
        <header>
            <Container>
                <nav>
                    <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'left' }}>
                        <Typography sx={{ marginRight: '20px' }}>
                            <Link href={'/auth'}>{l.threedModele}</Link>
                        </Typography>
                        <Typography sx={{ marginRight: '20px' }}>
                            <Link href={'/'}>{l.buy}</Link>
                        </Typography>
                        <Typography sx={{ marginRight: '20px' }}>
                            <Link href={'/'}>{l.support}</Link>
                        </Typography>
                    </Box>
                </nav>
                <Grid container spacing={3} sx={{marginTop:'10px'}}>
                    <Grid xs={3} sm={1.5}>
                        <Link href={'/'}>
                            <img src={logo.src} width='100%' />
                        </Link>
                    </Grid>
                    <Grid xs={3} sm={6} md={7}>
                        <label className='search-box d-none d-sm-flex' style={{color:'black'}}>
                            <input
                             onBlur={() => searchBlurkHandle()} 
                             onClick={() => searchClickHandle()} 
                             onChange={(e) => setSearch(e.target.value)}
                             value={search}
                             className="w-100" 
                             placeholder={l?.searchPlas} />
                             {(search) &&
                                
                                    <div 
                                    onClick={() => clearSearchHandle()}
                                     className='provider pointer'>
                                   <HiOutlineX />
                                   </div>
                                
                             }
                             <div onClick={() => searchButtonHandle()}>
                                <HiSearch />
                             </div>
                        </label>
                    </Grid>
                    <Grid xs={6} sm={4} md={3.5}>
                            
                                    
                                <Link href={'#'} onClick={()=> handleOpen()} className='pr-3'>{l.join}</Link>
                                
                            
                                <ListItemIcon style={{float:'right'}} className='pointer' onClick={() => langMenuHamdle()}>
                                    <span style={{backgroundSize:'30px,20px',backgroundPosition:'top',marginTop:'5px'}} 
                                    id={lang === 'fa'?'faFlag':'enFlag'}></span>
                                    <span className='d-none d-lg-block'>{l.lang}</span>
                                </ListItemIcon>
                                        
                                    
                                    {showLang&&<Languge />}
                                
                            
                        </Grid>
                </Grid>

            </Container>
                             <AuthBox open={loginBox} close={handleClose}/>
        </header>
    )
}

