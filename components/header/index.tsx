import { Box, Container, ListItemIcon, Modal, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { HiLogout, HiOutlineX, HiSearch } from 'react-icons/hi'
import Link from 'next/link';
import logo  from "../../public/logo.svg";
import { useContext, useEffect, useState } from 'react';
import Languge from '../lang';
import LangContext from '@/contexts/langContext';
import AuthBox from '../auth';
export default function Header() {
    const { l }:any = useContext(LangContext)
    const [lang, setLang] = useState('')
    const [loginBox, setLoginBox] = useState(false)

    useEffect(() => {
        console.log(l);
        
    })
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
    const handleOpen = () => setLoginBox(true);
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
                    <Grid xs={1.5}>
                        <Link href={'/'}>
                            <img src={logo.src} width='100%' />
                        </Link>
                    </Grid>
                    <Grid xs={7}>
                        <label className='search-box' style={{color:'black'}}>
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
                    <Grid xs>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <div className='auth-box'>
                                    
                                <Link href={'#'} onClick={()=> handleOpen()} className='pr-3'>{l.join}</Link>
                                <div style={{marginLeft:'40px'}}>
                                    <HiLogout />
                                    <Link href={'/'} className='pr-3'>{l.singIn}</Link>
                                </div>
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <div className='lang-box'>
                                <ListItemIcon className='pointer' onClick={() => langMenuHamdle()}>
                                    <span style={{backgroundSize:'30px,20px',backgroundPosition:'top',marginTop:'5px'}} 
                                    id={lang === 'fa'?'faFlag':'enFlag'}></span>
                                    {l.lang}
                                </ListItemIcon>
                                        
                                    
                                    {showLang&&<Languge />}
                                
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
                             <AuthBox open={loginBox} close={handleClose}/>
        </header>
    )
}

