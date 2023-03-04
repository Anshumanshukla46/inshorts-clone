import { Container } from '@mui/material'
import React from 'react'

// using "mui Container" for responsiveness
function NewsContent() {
    return (
        <Container maxWidth="md">
            <div className="content"></div>
        </Container>
    )
}

export default NewsContent
