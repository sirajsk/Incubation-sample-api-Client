import React, { useState } from "react"
import axios from "axios"
import { Alert,Link } from '@mui/material';
import { useNavigate } from "react-router-dom";

import './Login.css'

// import { useNavigate } from "react-router-dom"

export default function Login(props) {
    // const naviagate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    let [alert, setAlert] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let loginData = {
            email,
            password
        }
        if (props.Admin) {
            axios.post('http://localhost:3001/api/admin/login', loginData).then((res) => {
                let Data = res.data.admin
                localStorage.setItem("AdminData", JSON.stringify(Data))
                navigate('/admin/home')

            }).catch(err => {
                console.log(err);
                setAlert(true)

            })
        } else {

            axios.post('http://localhost:3001/api/login', loginData).then((res) => {
                let Data = res.data.user
                localStorage.setItem("userData", JSON.stringify(Data))
                navigate('/home')

            }).catch(err => {
                console.log(err);
                setAlert(true)

            })
        }

    }

    return (
        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    {props.Admin ? <form onSubmit={handleSubmit}>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="E-mail" />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
                        <div>{alert && <Alert severity="error">oops! you are not him </Alert>}</div>

                    </form>


                        : <form onSubmit={handleSubmit}>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    placeholder="E-mail" />
                            </div>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
                            <div>{alert && <Alert severity="error">Incorect Email or Password</Alert>}</div>
                        </form>}
                            <Link onClick={()=>{
                                navigate('/signup')
                            }}  style={{color:"white"}} variant="warning">
                                {"Don't have an account? Sign Up"}
                            </Link>

                </div>
            </div>
        </div>




    )
}