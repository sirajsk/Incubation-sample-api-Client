

import * as React from 'react';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';


export default function ImgMediaCard() {
    let CompanyData = JSON.parse(localStorage.getItem("CompanyData"))
    let userDatas = JSON.parse(localStorage.getItem("userData"))

    const naviagate = useNavigate();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item style={{ marginTop: 100 }} xs={3}>

                <Card sx={{ maxWidth: 700 }} >

                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="div">
                                Hello {userDatas.firstName}
                            </Typography>
                           { CompanyData ? <Typography variant="body2" color="text.secondary">
                               We got your Application We will text you soon . Thank you for your valuable time
                            </Typography>
                           : <Typography variant="body2" color="text.secondary">
                            You can Add your Application by click the button given below thank you 
                        </Typography>}
                        </CardContent>
                    </Grid>
                    <CardActions>
                        <Grid
                            container
                            spacing={0}
                            direction="row-reverse"
                            alignItems="center"
                            justify="center"
                        >

                            {CompanyData ? <Button size="small" 
                                 
                          >We Will Contact you sooon :)</Button>
                             :<Button size="small" onClick={() => {
                                naviagate('/apply-form')
                                
                            }}>Register For your Slot</Button>}
                            
                            
                        </Grid>

                    </CardActions>

                </Card>
            </Grid>
        </Grid>

    );
}
