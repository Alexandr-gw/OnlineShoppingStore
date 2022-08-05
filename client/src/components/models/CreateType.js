import React, { useState } from "react";
import {Modal, Button, Form} from 'react-bootstrap'
import {createType} from '../../http/deviceAPI.js'

const CreateType = ({show, onHide}) =>{
  const [value, setValue] = useState('')

 const addType = () =>{
    createType({name:value}).then(data=>setValue(''))
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
          ADD NEW TYPE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value = {value}
            onChange={e=>setValue(e.target.value)}
            placeholder="Enter type name"
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addType}>Add Type</Button>
      </Modal.Footer>
    </Modal>
    )

}

export default CreateType;