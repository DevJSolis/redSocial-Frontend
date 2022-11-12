import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import backgroundRegisterDesktop from '../../assets/register/backgroundRegisterDesktop.png';
import backgroundRegisterDesktopDark from '../../assets/register/backgroundRegisterDesktopDark.png';
import './Register.css';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Form from 'react-bootstrap/Form';



function Register() {
    const [darkModeSwitchState, setdarkModeSwitchState] = useState(false);
    const handleChange=(e)=>{
        setdarkModeSwitchState(!darkModeSwitchState)   
     }

    return ( 
        <Container fluid className='Register'>
            <Row className='flex-wrap flex-md-nowrap'>
                <Col xs={0} md={8} className="d-none d-md-block BackgroundLeft-Register" style={{ backgroundImage: `url(${ darkModeSwitchState ? backgroundRegisterDesktopDark : backgroundRegisterDesktop })`}}></Col>
                <Col xs={12} md={4} className={`BackgroundRight-Register darkmode_${darkModeSwitchState}`}>
                    <Form.Check
                        className='darkModeSwitch'
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode"
                        defaultChecked={darkModeSwitchState}
                        onChange={handleChange}
                    />
                    <RegisterForm darkMode={darkModeSwitchState}/>
                </Col>
            </Row>
        </Container>
     );
}

export default Register;