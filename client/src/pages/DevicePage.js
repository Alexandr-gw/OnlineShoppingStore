import React, { useEffect, useState } from 'react';
import {Container, Col, Image, Row, Button, Card} from 'react-bootstrap'
import starBig from '../assets/starBig.png'
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () =>{

 /*const device ={id:1,	name:"iPhone 12 ", price:	4500,	rating: 5,  img:"http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png"};
 const description = [
  {id:1, title:'RAM', description:'8 Gb'},
  {id:2, title:'Camera', description:'More then 2'},
  {id:3, title:'CPU', description:'A1'},
  {id:4, title:'Memory', description:'524 Gb'},
  {id:5, title:'TuchId', description:'BuildIn'},
 ]*/


 const [device, setDevice] = useState({info:[]})
 const {id} = useParams();


 useEffect( ()=>{
  fetchOneDevice(id).then(data=>setDevice(data))
 },[])
  return(
    <Container className = 'mt-3'>
      <Row>
       <Col md={4}>
         <Image width = {300} height = {300} src={process.env.REACT_APP_API_URL + device.img}/>
       </Col>
       <Col md={4}>
         <Row className='d-flex flex-column align-items-center'>
           <h2 style={{textAlign: "center"}}>{device.name}</h2>
           <div 
           className='d-flex align-items-center justify-content-center'
            style = {{background:`url(${starBig}) no-repeat center center`, width:200, height:200, backgroundSize:'cover', fontSize: 64}}>
          
             {device.rating}</div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex flex-column align-items-center justify-content-around'
          style={{width:300, height:300, fontSize:32, border:'5px solid lightgreen'}}>
            <h3 >From: {device.price} PLN</h3>
            <Button variant={'outline-dark'}>AddToBusket</Button>
          </Card>
        </Col>
      </Row>
      <h2>Parametes</h2>
      <Row className='d-flex flex-column m-3'>
        {device.info.map((info,index)=>
          <Row key={info.id} style={{background:index%2===0?'lightgray':'transparent',padding:10}} >{info.title}: {info.descriptions}</Row>)}
          
      </Row>
    </Container>
  );
};

export default DevicePage;
