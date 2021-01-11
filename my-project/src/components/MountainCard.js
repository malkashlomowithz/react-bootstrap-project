import {React, useState} from "react"
import { Card ,Button, Collapse} from "react-bootstrap"


export default function MountainCard({data}){

    const [open, setOpen] = useState(false);

    return(
          
        <Card className = " bg-whigt rounded shadow-sm rtl" >
            <Card.Img variant = "top" src = {data.image}/>
            <Card.Body className = "d-flex flex-column">
                <div className = "d-flex mb-2 justify-center-between">
                    <Card.Title className = "font-weight-bold mb-0">{data.name}</Card.Title>                    
                </div>
                <Button 
                    variant="light"
                    onClick={() => setOpen(!open)} 
                    aria-expanded={open}
                    className = "font-weight-bold">
                     Click me for more information                 
                </Button>
                <Collapse in={open}>
                    <div className = " mt-3">
                    {data.geography}
                <Card.Footer className = "font-weight-bold mb-0"> height of: {data.high} metres</Card.Footer>
                    </div>
                </Collapse>             
            </Card.Body>
        </Card>      
    )  
}