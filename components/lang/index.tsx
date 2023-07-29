import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';

export default function Languge() {

    function setLang(l:string) {
        const lang = localStorage.getItem('lang')
        if (l !== lang) {
            localStorage.setItem('lang',l)
            location.href = ''
        }
        
    }
    return(
        <Paper sx={{ width: 320, maxWidth: '100%', position:'absolute', right:'45px', zIndex:6000 }}>
                                    <MenuList>
                                        <MenuItem onClick={()=>{setLang('fa')}}>
                                        <ListItemIcon>
                                            <span id='faFlag'>
                                            
                                            </span>
                                        </ListItemIcon>
                                        <ListItemText>FA</ListItemText>
                                        <Typography variant="body2" color="text.secondary">
                                           فارسی 
                                        </Typography>
                                        </MenuItem>

                                        <MenuItem  onClick={()=>{setLang('en')}}>
                                        <ListItemIcon>
                                        <span id='enFlag'>
                                            
                                            </span>
                                        </ListItemIcon>
                                        <ListItemText>EN</ListItemText>
                                        <Typography variant="body2" color="text.secondary">
                                            English
                                        </Typography>
                                        </MenuItem>
                                   
                                    </MenuList>
                                </Paper>
    )
} 