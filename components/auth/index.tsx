import LangContext from '@/contexts/langContext'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Modal, TextField } from '@mui/material'
import Link from 'next/link'

import { useContext, useEffect, useState } from 'react'



function Login(props:any){

    return (
                <Box>
                  <h4 className='text-center mb-3'>{props.lang.signIn}</h4>
                  <div className='form-group mb-4'>
                    <TextField fullWidth id="outlined-basic" label={props.lang.enterEmail} variant="outlined" />
                  </div>
                    
                  <div className='form-group mb-4'>
                    <TextField fullWidth type='password' id="outlined-basic" label={props.lang.enterPassword} variant="outlined" />
                  </div>

                  <div className='text-center'>
                    <Button variant="contained">{props.lang.signIn}</Button>
                  </div>
                </Box>
        )
}

function Register(props:any){
    return (
    <>
                    <Box>
                  <h4 className='text-center mb-3'>{props.lang.signUp}</h4>
                  <div className='form-group mb-4'>
                    <TextField fullWidth id="outlined-basic" label={props.lang.enterUsername} variant="outlined" />
                  </div>
                    
                  <div className='form-group mb-4'>
                    <TextField fullWidth type='email' id="outlined-basic" label={props.lang.enterEmail} variant="outlined" />
                  </div>

                  <div className='form-group mb-4'>
                    <TextField fullWidth type='password' id="outlined-basic" label={props.lang.enterPassword} variant="outlined" />
                  </div>

                  <div className='form-group mb-4'>
                    <TextField fullWidth type='password' id="outlined-basic" label={props.lang.enterPasswordAgain} variant="outlined" />
                  </div>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Receive a notification e-mail" />
                  </FormGroup>
                  <p>{props.lang.ByClicking_SignUp_youAgreeTo} 
                    <Link href={'/'}> {props.lang.theTermsOfUseForCustomers}</Link> 
                    {props.lang.andAgreeTo}
                    <Link href={'/'}>{props.lang.thePrivacyPolicy}</Link>
                    </p>
                  <div className='text-center'>
                    <Button variant="contained">{props.lang.signUp}</Button>
                  </div>
                </Box>
    </>
    )
}

function ResetPass(props:any){
    return (
      <Box>
      <h4 className='text-center mb-3'>{props.lang.resetPassword}</h4>
      <div className='form-group mb-4'>
        <TextField fullWidth id="outlined-basic" label={props.lang.enterEmail} variant="outlined" />
      </div>

      <div className='text-center'>
        <Button variant="contained">{props.lang.continue}</Button>
      </div>
    </Box>
      )
}

export default function AuthBox(props:any) {
  const { l }:any = useContext(LangContext)

    const [authType, setAuthType] = useState('login');
    const [auth, setAuth] = useState(Login({lang:l}));
    useEffect(() => {
      switch(authType){
        case 'reset':
          setAuth(ResetPass({lang:l}))
        break
        case 'register':
          setAuth(Register({lang:l}))
        break
        default:
          setAuth(Login({lang:l}))
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

            <Button className="mb-5" onClick={()=>setAuthType('register')}>{l.register}</Button>
            <Button className="mb-5" onClick={()=>setAuthType('login')}>{l.login}</Button>
            <Button style={{float:'right'}} className="mb-5" onClick={()=>setAuthType('reset')}>{l.forgotPassword}</Button>
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
    width: '90%',
    margin:'0 auto',
    height:'auto',
    overflow:'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };