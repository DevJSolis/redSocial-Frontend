import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import backgroundRecoveryPassword from '../../assets/recoveryPassword/backgroundRecoveryPassword.png'
import backgroundRecoveryPasswordDark from '../../assets/recoveryPassword/backgroundRecoveryPasswordDark.png';
import './RecoveryPassword.css';
import RecoveryPasswordForm from '../../components/RecoveryPasswordForm/RecoveryPasswordForm';

function RecoveryPassword() {
    const [darkModeSwitchState, setdarkModeSwitchState] = useState(false);
    const handleChange=(e)=>{
        setdarkModeSwitchState(!darkModeSwitchState)   
     }

    return (
        <Container fluid className='recoveryPassword' style={{ backgroundImage: `url(${ darkModeSwitchState ? backgroundRecoveryPasswordDark : backgroundRecoveryPassword })`}}>
            <Form.Check
                        className='darkModeSwitch'
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode"
                        defaultChecked={darkModeSwitchState}
                        onChange={handleChange}
                    />
           <Row className='recoveryPasswordFormWrapper'>
            <Col xs={12} md={5}>
            <RecoveryPasswordForm/>
            </Col>
           </Row>
        </Container>
    );
}

export default RecoveryPassword;