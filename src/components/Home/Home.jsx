import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import { Alert } from 'react-bootstrap';
import "./Home.css";

function Home() {
    return(
        <>
            <Alert className='text-center' variant="info"> 
                This is a React Bootstrap Test
            </Alert>
        </>
    )
}

export default Home;