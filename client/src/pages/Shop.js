import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchType, fetchBrand, fetchDevice } from '../http/deviceAPI';

const Shop = observer( () =>{
  const {device} = useContext(Context)

  useEffect(()=>{
    fetchType().then(data=> device.setType(data))
    fetchBrand().then(data=> device.setBrands(data))
    fetchDevice(null,null,1,2).then(data=> {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)})
  },[])

  useEffect(()=>{
    fetchDevice(device.selectedType.id,device.selectedBrand.id,device.page,2).then(data=> {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)})
  },[device.page,device.selectedType,device.selectedBrand])

  return(
    <Container>

      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>

    </Container>
  );
});

export default Shop;
