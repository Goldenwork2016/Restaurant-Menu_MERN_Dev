import React from 'react';
import { Accordion } from 'react-bootstrap';

const ProductNote = (props)=>{
    return(
        <>
        <div class="mt-10 mb-8 border-bottom border-dark-3"></div>
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Interact E-Transfer</Accordion.Header>
            <Accordion.Body>
            Email address: lianalemaire@icloud.com
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
    )
}

export default ProductNote