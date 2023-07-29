import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';

export default function Languge() {

    return(
        <Paper sx={{ width: 320, maxWidth: '100%', position:'absolute', right:'45px' }}>
                                    <MenuList>
                                        <MenuItem>
                                        <ListItemIcon>
                                            <span id='faFlag'>
                                            
                                            </span>
                                        </ListItemIcon>
                                        <ListItemText>FA</ListItemText>
                                        <Typography variant="body2" color="text.secondary">
                                           فارسی 
                                        </Typography>
                                        </MenuItem>

                                        <MenuItem>
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