

import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
 import { createTheme, ThemeProvider } from '@mui/material/styles';
 import CssBaseline from '@mui/material/CssBaseline';
 import Grid from '@mui/material/Grid';
 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
 
 import Paper from "@mui/material/Paper";

 import { Modal } from "react-bootstrap";
 
 import axios from "axios";
 import { useNavigate } from "react-router-dom";
 const theme = createTheme();

function SlotBooking() {
  const [slot, setSlot] = useState([]);
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [approvedList, setApprovedList] = useState([]);
  const [Id, setId] = useState("");
  const [slotData, setSlotData] = useState([]);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const hideModal = () => setView(false);
  
  const handleSubmit = (event) => {
        event.preventDefault();
       const data = new FormData(event.currentTarget);
       let Data = {
        Name:null
    
       }
    
       axios.post('http://localhost:3001/api/admin/add-Slot', Data).then((res) => {
         console.log(res);
         let SlotD = res.data.Data
         setSlot(SlotD)
    
    
       }).catch(err => {
         console.log('err');
    
       })
     };
  async function getSlot() {
    await axios.get("http://localhost:3001/api/admin/getSlot").then((response) => {
      console.log(response);
      let obj = response.data.Data;
      setSlot(obj);
    });
  }

  const addSlot = async () => {
    await axios.post("http://localhost:3001/admin/addSlot").then((res) => {
    
      getSlot();
    });
  };
  const deleteSlot = async () => {
    await axios.post("http://localhost:3001/admin/deleteSlot").then((res) => {
     
      getSlot();
    });
  };
  const getApprovedList = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/admin/getApprovedList")
        .then((res) => {
          console.log(res,'res');
          setApprovedList(res.data.Data);
        })
        .catch((err) => {});
    } catch (error) {}
  };
  const handleShow = async (id) => {
    setShow(true);
    setId(id);
    getApprovedList();
   
  };
  const bookSlot = async (cId) => {
    
    console.log(Id);
    let id = Id;
    let obj = {
      Id: id,
      cId,
    };
    await axios
      .post("http://localhost:3001/api/admin/bookSlot", obj)
      .then((res) => {
        setShow(false)
        handleClose();
        
      });
  };

  const viewDetails = async (sId) => {
    setView(true);
    
    let id = Id;
    let obj = {
      sId
    };
    await axios
      .post("http://localhost:3001/api/admin/viewDetails", obj)
      .then((res) => {
        console.log(res,'on booked');
        setSlotData([res.data.Data]);
      
      });
  };

  var rows = [];
  const numslots = slot.length;


  useEffect(() => {
    console.log(slot);
    getSlot();
    let admin = localStorage.getItem("AdminData");
    if (!admin) {
      navigate("/admin/login");
    } else {
      navigate("/admin/slot");
    }
  }, [show, navigate]);
  return (
    <div className="">
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Box
           sx={{
             marginTop: 3,
             display: 'flex',
             flexDirection: 'column',             alignItems: 'ceneter',
           }}
         >

           <Box component="form" className='apply-form' noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
             <Grid container >
               <Grid item xs={12} sm={6} >
                 <TextField
                   autoComplete="given-name"
                   name="Slot"
                   required
                   fullWidth
                   type="number"
                   id="Name"
                   label="Add Slot"
                   autoFocus
                 />
               </Grid>

             </Grid>
            <Grid item xs={12} sm={6} >
              
               <Button
                 type="submit"
                 fullWidth

                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
               >
                 Add Slot
               </Button>
             </Grid>
           </Box>
         </Box>
       </ThemeProvider>
      
      <div className="p-3 m-5">
       
        <div className="d-flex">
         
        </div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 100,
              height: 50,
            },
          }}
        >
          {slot.map((obj, index) => {
            return obj.Booked ? (
              <Paper
                style={{ backgroundColor: "#0099ff", color: "#ffcc00" }}
                elevation={3}
                onClick={() => {
                  viewDetails(obj.Company);
                }}
              >
                {index + 1}
              </Paper>
            ) : (
              <Paper
                elevation={3}
                onClick={() => {
                  handleShow(obj._id);
                }}
              >
                {index + 1}
              </Paper>
            );
          })}
        </Box>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Company Names</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <table>
              {approvedList.map((list) => (
                <tr>
                  <th>{list.CompanyName}</th>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => bookSlot(list._id)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={view} onHide={hideModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Booked Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <table>
              {slotData.map((list) => (
                <tbody>
                  <tr>
                    <th>Company</th>
                    <td>{list.CompanyName}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{list.Address}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>{list.City}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{list.State}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SlotBooking;
