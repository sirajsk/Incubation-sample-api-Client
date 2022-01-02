import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert,Link } from '@mui/material';
import './Signup.css'
import axios from 'axios'
export default function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let [alert, setAlert] = useState(false)
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        let signupData = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(signupData);
        axios.post('http://localhost:3001/api/signup', signupData).then((res) => {
            navigate('/')

        }).catch(err => {
            console.log("heheheheeheh");
            console.log(err.response);
            setAlert(true)
        })
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

                    <form onSubmit={handlesubmit}>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name" />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fas fa-file-signature"></i></span>
                            </div>
                            <input type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name" />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fas fa-envelope-square"></i></span>
                            </div>
                            <input type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail" />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block">SIGNUP</button>

                        <div style={{ marginTop: 20 }}>{alert && <Alert severity="error">User is Already Exist</Alert>}</div>



                    </form>

                    <Link onClick={() => {
                        navigate('/login')
                    }} style={{color:"white"}} variant="white">
                        {"Already have a account? Login"}
                    </Link>
                </div>
            </div>
        </div>

    )
}