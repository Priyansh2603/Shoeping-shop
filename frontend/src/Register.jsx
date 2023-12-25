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

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(event);
  };

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        name, lastname, email, password, picture, gender, age, interests
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.exist === "true") {
        toast.info("The Email is already registered!",{theme:"dark",autoClose:2000,position:"top-center"});
      } else if (response.data.exist === "false") {
        // console.log(response.data._doc._id);
        loggedIn("true", name,response.data._doc._id,response.data);
        document.title=`Shoeping (${name})`
        history("/");
        toast.success(`Registered Successfully! as${name}`,{theme:"dark",autoClose:2000,position:"top-center"});
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
                    type="limk"
                    onChange={(e) => { setPicture(e.target.value) }}
                    id="picture"
                    name="picture"
                    label="Profile Picture Address"
                    value={picture}
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
              >
                Sign Up
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
