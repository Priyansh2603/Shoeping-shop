import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {useContext} from 'react'
import {AppState} from './App'
import { useToast } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import Cookies from 'js-cookie';
const theme = createTheme();
export default function Register() {
  const loggedIn = useContext(AppState).loggedIn;
  const history = useNavigate();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState('');
  const [loading, setLoading] = useState(false);
  
const toaster = useToast();
  const postDetails = (pics)=>{
    setLoading(true);
    if(pics===undefined){
      toaster({
        title: 'Select an Image.',
        description: "We couldn't find the image...",
        status: 'error',
        duration: 1500,
        isClosable: true,
      })
      setLoading(false);
    }
    if(pics.type==="image/jpeg" || pics.type==="image/png"){
      const data = new FormData();
      data.append("file",pics);
      data.append("upload_preset","shoeping");
      data.append("cloud_name","dazhcprb8");
      fetch("https://api.cloudinary.com/v1_1/dazhcprb8/image/upload",{
        method:"post",body: data
      }).then((res)=>res.json()).then((data)=>{
        setPicture(data.url.toString());
        console.log("Image Added successfully to",data.url.toString())
        setLoading(false);
      }).catch((e)=>{
        console.log("Image Error:",e);
        setLoading(false);
      }
      )
    }
    else{
      toaster({
        title: 'Not an Image.',
        description: "Please choose image file...",
        status: 'warning',
        duration: 1500,
        isClosable: true,
      })
      setLoading(false);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(event);
  };

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        name, lastname, email, password, picture, gender, age, interests
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
          withCredentials: true,
      });
      console.log(response.data);
      if (response.data.exist === "true") {
        toast.info("The Email is already registered!",{theme:"dark",autoClose:2000,position:"top-center"});
      } else if (response.data.exist === "false") {
        // console.log(response.data._doc._id);
        loggedIn("true", name,response.data._doc._id,response.data._doc);
        const userInfo = {...response.data._doc,"token": response.data.token};
            localStorage.setItem('userInfo',userInfo);
            localStorage.setItem('userId',response.data._doc._id);
            Cookies.set("user",response.data._doc._id,{expires:30});
        document.title=`Shoeping (${name})`
        history("/");
        toast.success(`Registered Successfully! as ${name}`,{theme:"dark",autoClose:2000,position:"top-center"});
      }
    } catch (error) {
      toast.error("Wrong Details",{theme:"dark",autoClose:2000,position:"top-center"});
      console.error(error);
    }
  }

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme} style={{marginTop:"5vh"}}>
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="file"
                    accept = "image/*"
                    onChange={(e) => { postDetails(e.target.files[0]) }}
                    id="picture"
                    name="picture"
                    label="Profile Picture"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    id="gender"
                    label="Gender"
                    name="gender"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    id="age"
                    label="Age"
                    name="age"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    id="interests"
                    label="Interests"
                    name="interests"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                onClick={submit}
                value="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                isLoading = {loading}
              >
                {loading?"Loading...":"Sign Up"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Already have an account?
                  <Link to="/login">
                    Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
