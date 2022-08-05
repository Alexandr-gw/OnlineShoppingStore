import React, { useState } from "react";
import {Modal, Button, Form} from 'react-bootstrap'
import {createBrand} from '../../http/deviceAPI.js'



const CreateBrand = ({show, onHide}) =>{

  const [value, setValue] = useState('')

  const addBrand = () =>{
     createBrand({name:value}).then(data=>setValue(''))
     setValue('')
     onHide()
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
          ADD NEW BRAND
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value = {value}
            onChange={e=>setValue(e.target.value)}
            placeholder="Enter brand name"
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addBrand}>Add Brand</Button>
      </Modal.Footer>
    </Modal>
    )

}

export default CreateBrand;