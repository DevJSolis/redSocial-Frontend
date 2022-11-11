import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import { Alert } from 'react-bootstrap';
import "./Home.css";

function Home() {
    return(
        <>
            <Alert className='text-center' variant="info"> 
                Holis
            </Alert>
        </>
    )
}

export default Home;