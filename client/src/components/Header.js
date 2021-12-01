import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { BsSearch} from 'react-icons/bs'

const Header =()=>{


    return(
        <header>
            <img src='https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' width={'25%'} alt='title' className='title'/>

            <InputGroup className="mb-3" width={'10%'}>
                <FormControl
                placeholder="Pokemon's name"
                aria-label="Pokemon's name"
                aria-describedby="basic-addon2"
                
                />
                <Button variant="outline-secondary" id="button-addon2">
                    <BsSearch/>
                </Button>
            </InputGroup>
        </header>
    )
}

export default Header