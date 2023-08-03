import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/joy';
import Attribute from '../attr';
import Category from '../category';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer(props:any) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '85vw',zIndex:'1400',position:'relative'}}
      role="presentation"
    >
        <div className='bg-gray p-2' style={{background:'#d2d2d2'}}>
            <Button disabled variant="plain" color="neutral" className='pointer'>Clear filter</Button>
            <Button onClick={toggleDrawer('left', false)} variant="plain" style={{float:'right', marginRight:'15px'}}>X</Button>
            <Divider />
        </div>
        <div style={{padding:'30px 12px 100px'}}>
        <Category />
        <Attribute />

        </div>
    </Box>
  );

  return (
    <>
        <React.Fragment>
        <Button onClick={toggleDrawer('left', true)} variant="plain">{props.title} {props.icon} </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </>
  );
}