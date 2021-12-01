import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'

const Pokemon =()=>{

    const [open, setOpen] = useState(false)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Title>Card Title</Card.Title>
                <Collapse in={open}>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Collapse>
            </Card.Body>
        </Card>
    )
}

export default Pokemon