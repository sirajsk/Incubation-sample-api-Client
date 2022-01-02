// import React from "react";
// import { useNavigate} from "react-router-dom";
// import '../Home/Home.css'


// export default function Banner() {
//     const naviagate = useNavigate();
//     return (
//         <div>
//             <div style={{textAlign:"center"}}>

//            <button onClick={()=>{
//             naviagate('/login')

//            }} style={{textAlign:"center" ,color:"black",marginTop:60}}> Login</button>
//             </div>
//         </div>
//     )
// }

import * as React from 'react';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';


export default function ImgMediaCard() {
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
                                Hello
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               You can Access this Website by click the two button bellow
                               Thank you for Your support 
                               please support with us
                            </Typography>
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

                            <Button size="small" onClick={() => {
                                naviagate('/login')

                            }}>Login</Button>
                            <Button size="small" onClick={() => {
                                naviagate('/signup')

                            }}>Signup</Button>
                        </Grid>

                    </CardActions>

                </Card>
            </Grid>
        </Grid>

    );
}