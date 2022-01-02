import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminHome() {
    const values = ['sm-down'];
    const [pending, setPending] = useState([])
  const navigate = useNavigate()

    const [newApp, setNewApp] = useState([])
    const [appllication, setApplication] = useState([])
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [Status, setStatus] = useState('')
    const [CompanyD, setCompanyD] = useState('')

    function changeStatus(Status, id) {
        let obj = { Status, id }

        axios.post('http://localhost:3001/api/admin/updatePending', obj).then((res) => {
            console.log(res);
            setStatus(res.data.Status)
        }).catch(err => {
            console.log(err);
        })
    }

    function handleShow(breakpoint,id) {
        console.log(id);
        let Data={Status,id}
        axios.post('http://localhost:3001/api/admin/CompanyDetailes',Data).then((res) => {
            console.log(res);
            let CompanyData = res.data.Data
            console.log(CompanyData);
            // setPending(PendingData)
            setCompanyD(CompanyData)

        }).catch(err => {
            console.log(err);
        })
        setFullscreen(breakpoint);
        setShow(true);
    }
    useEffect(() => {
    
        axios.get('http://localhost:3001/api/admin/pending').then((res) => {
            let PendingData = res.data.Data

            setPending(PendingData)

        }).catch(err => {
            console.log(err);
        })

        axios.get('http://localhost:3001/api/admin/newApplication').then((res) => {
            console.log(res);
            let NewData = res.data.Data
            setNewApp(NewData)
        }).catch(err => {
            console.log(err);
        })

        axios.get('http://localhost:3001/api/admin/application').then((res) => {
            let Data = res.data.Data

            setApplication(Data)
        }).catch(err => {
            console.log(err);
        })
        let admin = localStorage.getItem("AdminData");
        if (!admin) {
            navigate("/admin/login");
        } else {
            navigate("/admin/home");
        }

    }, [Status,navigate])

    return (
        <div className=" p-5 m-5"  >

            <h2 className="mb-5" style={{ color: "black", display: "flex", justifyContent: "flex-start" }} >New Application List</h2>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {newApp?.map((val,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{val?.CompanyName}</td>
                            <td>{val?.CompanyName}</td>

                            <td >  <>
                                {values.map((v, idx) => (
                                    <Button key={idx} className="me-2" onClick={() => handleShow(v,val._id)}>
                                        View
                                    </Button>
                                ))}
                                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Company Detailes</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body > <span className="fw-bold">Name:</span> {CompanyD.Name}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Company Name:</span> {CompanyD.CompanyName}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Address:</span> {CompanyD.Address}</Modal.Body>

                                    <Modal.Body > <span className="fw-bold">Email:</span> {CompanyD.Email}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">About Team:</span> {CompanyD.AboutTeam}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">About Market:</span> {CompanyD.AboutMarket}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">City Name:</span> {CompanyD.City}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Phone:</span> {CompanyD.Phone}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Status:</span> {CompanyD.Status}</Modal.Body>

                                </Modal>
                            </></td>
                            <td><Button onClick={() => {
                                changeStatus('Pending', val._id)
                            }} variant="warning">Pending</Button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <h2 className="mb-5" style={{ color: "black", display: "flex", justifyContent: "flex-start", marginTop: 80 }} >Pending List</h2>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>First Name</th>
                        <th>View</th>
                        <th>Approve</th>
                        <th>Dicline</th>
                    </tr>
                </thead>

                <tbody>

                    {pending?.map((val,index) => (

                        <tr>
                            <td>{index+1}</td>
                            <td>{val?.Name}</td>
                            <td>{val?.Name}</td>
                            <td > <>
                                {values.map((v, idx) => (
                                    <Button key={idx} className="me-2" onClick={() => handleShow(v,val._id)}>
                                        View
                                    </Button>
                                ))}
                                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Company Detailes</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body > <span className="fw-bold">Name:</span> {CompanyD.Name}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Company Name:</span> {CompanyD.CompanyName}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Address:</span> {CompanyD.Address}</Modal.Body>

                                    <Modal.Body > <span className="fw-bold">Email:</span> {CompanyD.Email}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">About Team:</span> {CompanyD.AboutTeam}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">About Market:</span> {CompanyD.AboutMarket}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">City Name:</span> {CompanyD.City}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Phone:</span> {CompanyD.Phone}</Modal.Body>
                                    <Modal.Body > <span className="fw-bold">Status:</span> {CompanyD.Status}</Modal.Body>

                                </Modal>
                            </></td>
                            <td><Button onClick={() => {
                                changeStatus('Approve', val._id)
                            }} variant="secondary">Approve</Button>  </td>
                            <td><Button onClick={() => {
                                changeStatus('Dicline', val._id)
                            }} variant="warning">Dicline</Button></td>
                        </tr>
                    ))}



                </tbody>
            </Table>



            <h2 className="mb-5" style={{ color: "black", display: "flex", justifyContent: "flex-start", marginTop: 80 }} >Application Progress</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appllication?.map((val) => (

                        <tr>
                            <td>{val.CompanyName}</td>

                            <td colSpan={2}>{val.Status}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    )
}
export default AdminHome
