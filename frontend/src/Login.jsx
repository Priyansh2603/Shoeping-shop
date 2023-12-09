import * as React from 'react';
import {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import axios from 'axios';
// import bcrypt from 'bcrypt';
import {Link, useNavigate} from 'react-router-dom';
// import {history} from 'react-router-dom';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Home from './Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppState } from './App';
// import bcrypt from 'bcrypt';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const loggedIn = useContext(AppState).loggedIn;
  const [email,setEmail]= useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function submit(e){
    e.preventDefault();
    // console.log(email,password);
    try{
        const res = await axios.post("http://localhost:8000/auth/login", {
           email, password,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (res.data.email===email) {
            // Assuming the response structure is { email, name, ...otherUserData }
            const { name } = res.data;
            // console.log("from login",res.data._id)
            // console.log(res.data);
            loggedIn(true,name,res.data._id);
            document.title=`Shoeping (${name})`
            history("/");
            toast.success(`Logged in Successfully as ${name}`,{theme:"dark",autoClose:2000,position:"top-center"});
          }
        if(res.data==="Incrorrect"){
            toast.error("Email and Password doesn't match!",{theme:"dark",autoClose:2000,position:"top-center"})
        }
        if(res.data==="notexist"){
            toast.info("This email is not registered! SignUp to register",{theme:"dark",autoClose:2000,position:"top-center"});
        }
    }
    catch(e){
        toast.error("Login Error!",{theme:"dark",autoClose:2000,position:"top-center"})
    }
  }
  return (<>
  <ToastContainer></ToastContainer>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <Box component="form" action="POST" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            autoComplete="email"
            autoFocus
            />
            <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Box component="form" action="POST" noValidate sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            autoComplete="email"
            autoFocus
            />
            <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"/>
              {/* <input type= "email" name="email" onChange={(e)=>{setEmail(e.target.value)}} id = 'email' required/>
            //     <br/>
            //     <input type= "password" name="password" onChange={(e)=>{setPassword(e.target.value)}} id = 'password' required/>
            //     <br/> */}

             {/* <ToastContainer> */}
            <Button type="submit"
              onClick={submit}
              value="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            {/* </ToastContainer> */}
            <Grid container>
              <Grid item xs>
                <Link to="/">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Container>
        </ThemeProvider>
        </>
  )
}