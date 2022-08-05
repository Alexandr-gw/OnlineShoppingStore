import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index.js";

const BrandBar = observer( () =>{
    const {device} = useContext(Context)

        return (
            <Row className='d-flex'>
              {device.brands.map(brand =>
                <Card key={brand.id} 
                className='p-2' style={{width: '7em',cursor:'pointer'}} 
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id===device.selectedBrand.id?'danger':'light'}>{brand.name}</Card>)}
                
            </Row>
        )
})

export default BrandBar;