import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ItemCard() {

    
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>
                    {/* {itemName} */}
                </Card.Title>
                <Card.Text>
                    {/* {itemText} */}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}