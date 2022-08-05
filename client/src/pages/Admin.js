import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/models/CreateType.js';
import CreateDevice from '../components/models/CreateDevice.js';
import CreateBrand from '../components/models/CreateBrand.js';

const Admin = () =>{
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return(
    <Container className='d-flex flex-column'>
        <Button variant={'outline-dark'} className='mt-3 align-self-center' onClick={()=>setTypeVisible(true)}>Add Type</Button>
        <Button variant={'outline-dark'} className='mt-3 align-self-center' onClick={()=>setBrandVisible(true)}>Add Brand</Button>
        <Button variant={'outline-dark'} className='mt-3 align-self-center' onClick={()=>setDeviceVisible(true)}>Add Device</Button>
    <CreateType   show={typeVisible}   onHide = {() =>setTypeVisible(false)}  />
    <CreateBrand  show={brandVisible } onHide = {() =>setBrandVisible(false)} />
    <CreateDevice show={deviceVisible} onHide = {() =>setDeviceVisible(false)}/>
    </Container>
  );
};

export default Admin;
