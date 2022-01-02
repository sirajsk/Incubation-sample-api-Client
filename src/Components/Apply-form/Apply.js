import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Alert } from '@mui/material';
import  "../Apply-form/Apply.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
export default function ApplyForm() {
    useEffect(() => {      
        setAlert(false)
        return () => {
        }
    }, [])
    const [alert,setAlert]=useState(false)
    const navigate=useNavigate()
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); 
    let Data={
        Name:data.get('Name'),
        Address:data.get('Address'),
        City:data.get('City'),
        State:data.get('State'),
        Email:data.get('Email'),
        Phone:data.get('Phone'),
        CompanyName:data.get('CompanyName'),
        AboutTeam:data.get('AboutTeam'),
        AboutProduct:data.get('AboutProduct'),
        AboutProblem:data.get('AboutProblem'),
        AboutSolution:data.get('AboutSolution'),
        AboutProposition:data.get('AboutProposition'),
        AboutCompetitors:data.get('AboutCompetitors'),
        AboutRevenue:data.get('AboutRevenue'),
        AboutMarket:data.get('AboutMarket'),
    }
    console.log(Data);
    axios.post('http://localhost:3001/api/apply-form',Data).then((res)=>{
        let CompanyData=res.data.SDAta
        localStorage.setItem("CompanyData",JSON.stringify(CompanyData))
        navigate('/home')
    }).catch(err=>{
        console.log('err');
        setAlert(true)
    })  
  };
  return (
    <ThemeProvider theme={theme}>    
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >         
          <Typography component="h1" variant="h5">
            Restration Form
          </Typography>
          <Box component="form" className='apply-form' noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="City"
                  label="City"
                  name="City"
                  autoComplete="City"
                />
              </Grid>            
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="State"
                  label="State"
                  name="State"
                  autoComplete="State"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  type="email"
                  name="Email"
                  autoComplete="Email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label="Phone no"
                  type="number"
                  name="Phone"
                  autoComplete="Phone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="CompanyName"
                  label="Company Name"
                  name="CompanyName"
                  autoComplete="CompanyName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  maxRows={4}
                  id="About-team"
                  label="Discribe your team and Background"
                  type=""
                  name="AboutTeam"
                  autoComplete="AboutTeam"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  maxRows={4}
                  name="AboutProduct"
                  label="Discribe Your company and Product"
                  type=""
                  id="AboutProduct"
                  autoComplete="About-Product"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   multiline
                  maxRows={4}
                  name="AboutProblem"
                  label="Discribe the problem Your are trying to solve"
                  type=""
                  id="About-Problem"
                  autoComplete="About-Problem"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   multiline
                  maxRows={4}
                  name="AboutSolution"
                  label="What is unique about your solution"
                  type=""
                  id="About-Solution"
                  autoComplete="About-Solution"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   multiline
                  maxRows={4}
                  name="AboutProposition"
                  label="What is your value proposition for the cusomer?"
                  type="About-proposition"
                  id="About-proposition"
                  autoComplete="About-proposition"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   multiline
                  maxRows={4}
                  name="AboutCompetitors"
                  label="Who are your competitors and your  Competative advantages"
                  type=""
                  id="About-competitors"
                  autoComplete="About-competitors"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   multiline
                  maxRows={4}
                  name="AboutRevenue"
                  label="Explane your revenue model"
                  type=""
                  id="About-revenue"
                  autoComplete="About-revenue"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                   multiline
                  maxRows={4}
                  name="AboutMarket"
                  label="What is the potential market size of the Product "
                  type=""
                  id="About-market"
                  autoComplete="About-market"
                />
              </Grid>             
            </Grid>
            <Grid item xs={12} >
            <div style={{marginTop:20}}>{alert && <Alert severity="error">Company Name Already Exist</Alert> }</div>
            <Button             
              type="submit"
              fullWidth
               
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Apply Form
            </Button>
            </Grid>           
          </Box>
        </Box>      
    </ThemeProvider>
  );
}