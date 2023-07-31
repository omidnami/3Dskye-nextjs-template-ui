import { Box, Button, Checkbox, FormControlLabel, FormGroup, Modal, TextField } from '@mui/material'
import Link from 'next/link'

import { useEffect, useState } from 'react'



function Login(){
    return (
                <Box>
                  <h4 className='text-center mb-3'>Sign In</h4>
                  <div className='form-group mb-4'>
                    <TextField fullWidth id="outlined-basic" label="Enter Email" variant="outlined" />
                  </div>
                    
                  <div className='form-group mb-4'>
                    <TextField fullWidth type='password' id="outlined-basic" label="Enter Password" variant="outlined" />
                  </div>

                  <div className='text-center'>
                    <Button variant="contained">Sing In</Button>
                  </div>
                </Box>
        )
}

function Register(){
    return (
    <>
                    <Box>
                  <h4 className='text-center mb-3'>Sign up</h4>
                  <div className='form-group mb-4'>
                    <TextField fullWidth id="outlined-basic" label="Enter UserName" variant="outlined" />
                  </div>
                    
                  <div className='form-group mb-4'>
                    <TextField fullWidth type='email' id="outlined-basic" label="Enter Email" variant="outlined" />
                  </div>

                  <div className='form-group mb-4'>
                    <TextField fullWidth type='password' id="outlined-basic" label="Enter Password" variant="outlined" />
                  </div>

                  <div className='form-group mb-4'>
                    <TextField fullWidth type='password' id="outlined-basic" label="Enter Password again" variant="outlined" />
                  </div>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Receive a notification e-mail" />
                  </FormGroup>
                  <p>By clicking {'"Sign Up"'} you agree to 
                    <Link href={'/'}> The Terms of Use for Customers</Link> 
                    and agree to 
                    <Link href={'/'}>The Privacy policy</Link>
                    </p>
                  <div className='text-center'>
                    <Button variant="contained">Sing Up</Button>
                  </div>
                </Box>
    </>
    )
}

function ResetPass(){
    return (
      <Box>
      <h4 className='text-center mb-3'>Reset password</h4>
      <div className='form-group mb-4'>
        <TextField fullWidth id="outlined-basic" label="Enter Email" variant="outlined" />
      </div>

      <div className='text-center'>
        <Button variant="contained">continue</Button>
      </div>
    </Box>
      )
}

export default function AuthBox(props:any) {
    const [authType, setAuthType] = useState('login');
    const [auth, setAuth] = useState(Login());
    useEffect(() => {
      switch(authType){
        case 'reset':
          setAuth(ResetPass())
        break
        case 'register':
          setAuth(Register())
        break
        default:
          setAuth(Login())
      }
    },[authType])
    return (
        <Modal
        keepMounted
        open={props.open}
        onClose={props.close}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>

            <Button className="mb-5" onClick={()=>setAuthType('register')}>Register</Button>
            <Button className="mb-5" onClick={()=>setAuthType('login')}>Login</Button>
            <Button style={{float:'right'}} className="mb-5" onClick={()=>setAuthType('reset')}>Forgot Password</Button>
          {auth}

        </Box>
      </Modal>
    )
        
    
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };