import { Box, Container, ListItemIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { HiLogout, HiOutlineX, HiSearch } from 'react-icons/hi'
import Lang from "@/lang/en/header.json"
import Link from 'next/link';
import logo  from "../../public/logo.svg";
import { useState } from 'react';
import Languge from '../lang';
export default function Header() {

    const [showLang, setShowLang] = useState(false)
    const [search, setSearch] = useState('')

    const searchClickHandle = () => {
        document.body.classList.add('dark')
    }
    const searchBlurkHandle = () => {
        document.body.classList.remove('dark')
    }
    const clearSearchHandle = () => {
        setSearch('')
    }
    const searchButtonHandle = () => {
        if (search) {
            alert(search)
        }
    }

    const langMenuHamdle = () => {
        setShowLang(!showLang)
    }

    return (
        <header>
            <Container>
                <nav>
                    <Box sx={{ display: 'flex', alignItems: 'left', textAlign: 'left' }}>
                        <Typography sx={{ marginRight: '20px' }}>
                            <Link href={'/'}>{Lang['3dModele']}</Link>
                        </Typography>
                        <Typography sx={{ marginRight: '20px' }}>
                            <Link href={'/'}>{Lang.buy}</Link>
                        </Typography>
                        <Typography sx={{ marginRight: '20px' }}>
                            <Link href={'/'}>{Lang.support}</Link>
                        </Typography>
                    </Box>
                </nav>
                <Grid container spacing={3} sx={{marginTop:'10px'}}>
                    <Grid xs={1.5}>
                        <Link href={'/'}>
                            <img src={logo} width={100} height={30} />
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
                             placeholder={Lang.searchPlas} />
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
                                    
                                <Link href={'/'} className='pr-3'>{Lang.join}</Link>
                                <div style={{marginLeft:'40px'}}>
                                    <HiLogout />
                                    <Link href={'/'} className='pr-3'>{Lang.singIn}</Link>
                                </div>
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <div className='lang-box'>
                                <ListItemIcon className='pointer' onClick={() => langMenuHamdle()}>
                                    <span style={{backgroundSize:'30px,20px',backgroundPosition:'top',marginTop:'5px'}} id='enFlag'></span>
                                    {Lang.lang}
                                </ListItemIcon>
                                        
                                    
                                    {showLang&&<Languge />}
                                
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            
        </header>
    )
}