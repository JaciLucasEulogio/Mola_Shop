import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, login } from '../../State/Auth/Action';

const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const jwt=localStorage.getItem('jwt');
  const {auth}=useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  },[jwt,auth.jwt])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();

    const data=new FormData(event.currentTarget);

    const userData={
      //firstName:data.get('firstName'),
      //lastName:data.get('lastName'),
      email:data.get('email'),
      password:data.get('password')
    }
    dispatch(login(userData))
    console.log("User Data",userData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
            required
            id='email'
            name='email'
            label='Email'
            fullWidth
            autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              fullWidth
              autoComplete='password'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className='bg-[#9155FD] w-full' type='submit' variant='contained' size='large' sx={{padding:'.8rem 0', bgcolor:'#9155FD'}}>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>Don't have an account? <Button className='text-[#9155FD] ml-5' onClick={()=>navigate("/register")} size='small'>Register</Button></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;