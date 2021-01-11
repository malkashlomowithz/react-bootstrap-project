import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col } from "react-bootstrap"
import MountainCard from "./components/MountainCard"
import Heder from "./components/HederComp"
import Mountaine from "./data.json"


function App() {
  return (
   
    <Container>
       <Heder/>
      <Row>
        {Mountaine.map(data =>(
         <Col>
         <MountainCard data ={data}/>
         </Col>
         )
        )}
      </Row>
    </Container>
    
  );
}
export default App;
