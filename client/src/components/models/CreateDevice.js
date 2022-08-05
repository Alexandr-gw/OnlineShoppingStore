import React, { useEffect, useContext, useState } from "react";
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'
import { Context } from '../../index.js';
import { fetchType, fetchBrand, createDevice } from '../../http/deviceAPI';
import { observer } from "mobx-react-lite";




const CreateDevice = observer( ({show, onHide}) =>{
const {device} = useContext(Context)

const [info, setInfo] = useState([])

const [name, setName] = useState('')
const [price, setPrice] = useState(0)
const [file, setFile] = useState(null)


useEffect(()=>{
  fetchType().then(data=> device.setType(data))
  fetchBrand().then(data=> device.setBrands(data))
},[])



const addInfo = () => {
  setInfo([...info, {title: '' , description: '' , number: Date.now() }])
  
}

const removeInfo = (number) => {
  setInfo(info.filter (i => i.number !== number))
}

const changeInfo= (key,value,number) =>{
  setInfo(info.map(i=>i.number === number ? {...i,[key]:value}:i))
}


const selectFile = e =>{
  setFile(e.target.files[0])
}

const addDevice =()=>{
  
  const formData = new FormData()
  
  formData.append('name',name)
  formData.append('price',`${price}`)
  formData.append('brandId',device.selectedBrand.id)
  formData.append('typeId',device.selectedType.id)
  formData.append('img',file)
  formData.append('info',JSON.stringify(info))
 // -------------
    console.log('name',name)
    console.log('price',`${price}`)
    console.log('brandId',device.selectedBrand.id)
    console.log('typeId',device.selectedType.id)
    console.log('img!!!',file, 'selectFile&&&',file)
    console.log('info!!',JSON.stringify(info))
 // -------------
  createDevice(formData).then(data=>onHide())
}
    return(
      
        <Modal
      size="lg"
      centered
      show = {show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD NEW DEVICE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown className='mt-3 mb-2'>
          <Dropdown.Toggle>{device.selectedType.name || 'Choose Type' }</Dropdown.Toggle>
          <Dropdown.Menu>{device.types.map (type => 
            <Dropdown.Item key={type.id} onClick={()=>device.setSelectedType(type)}>{type.name}</Dropdown.Item>
            )}</Dropdown.Menu>
        </Dropdown>
        <Dropdown className='mt-3 mb-2'>
          <Dropdown.Toggle>{device.selectedBrand.name || 'Choose Brand' }</Dropdown.Toggle>
          <Dropdown.Menu>{device.brands.map (brand => 
            <Dropdown.Item key={brand.id} onClick={()=>device.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
            )}</Dropdown.Menu>
        </Dropdown>
        <Form.Control className='mt-3 mb-2' placeholder='Enter device name' value = {name} onChange={e=>setName(e.target.value)}/>
        <Form.Control className='mt-3 mb-2' placeholder='Enter price name' type='number' value = {price} onChange={e=>setPrice(Number(e.target.value))}/>
        <Form.Control className='mt-3 mb-2' type='file' accept='image/jpg' onChange={selectFile}/>
        <hr/>
        <Button variant="outline-dark" onClick={addInfo}>Add New Parameter</Button>
        
        {info.map ( i => 
          <Row className='mt-4' key={i.number}>
            <Col md={4}>
              <Form.Control value={i.title} onChange={(e)=>changeInfo('title',e.target.value, i.number)} placeholder="Enter title name"/>
            </Col>
            <Col md={4}>
              <Form.Control value={i.description} onChange={(e)=>changeInfo('description',e.target.value, i.number)} placeholder="Enter discription"/>
            </Col>
            <Col md={4}>
                <Button 
                onClick={()=> removeInfo(i.number)}
                variant ='outline-danger' 
                >Remove parameter</Button>
            </Col>
          </Row>
        )}
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addDevice}>Add Device</Button>
      </Modal.Footer>
    </Modal>
    )

});

export default CreateDevice;