import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import backgroundLoginMobile from '../assets/login/backgroundLoginMobile.png';
// import backgroundLoginMobileDark from '../assets/login/backgroundLoginMobileDark.png';
import backgroundLoginDesktop from '../assets/login/backgroundLoginDesktop.png';
import backgroundLoginDesktopDark from '../assets/login/backgroundLoginDesktopDark.png';
import './Login.css';
import LoginForm from "../components/LoginForm/LoginForm";

import Form from 'react-bootstrap/Form';


function Login() {
    const [darkModeSwitchState, setdarkModeSwitchState] = useState(false);
    const handleChange=(e)=>{
        setdarkModeSwitchState(!darkModeSwitchState)   
     }

    return ( 
        <Container fluid className='login'>
            <Row className='flex-wrap flex-md-nowrap'>
                <Col xs={0} md={8} className="d-none d-md-block BackgroundLeft-login" style={{ backgroundImage: `url(${ darkModeSwitchState ? backgroundLoginDesktopDark : backgroundLoginDesktop })`}}></Col>
                <Col xs={12} md={4} className={`BackgroundRight-login darkmode_${darkModeSwitchState}`}>
                    <Form.Check
                        className='darkModeSwitch'
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode"
                        defaultChecked={darkModeSwitchState}
                        onChange={handleChange}
                    />
                    <LoginForm darkMode={darkModeSwitchState}/>
                </Col>
            </Row>
        </Container>
     );
}

export default Login;