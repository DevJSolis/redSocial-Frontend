import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import backgroundNewPasswordDesktop from '../../assets/newPassword/newPassBackground.png';
import backgroundNewPasswordDesktopDark from '../../assets/newPassword/newPassBackgroundDark.png';
import './NewPassword.css';
import NewPasswordForm from '../../components/NewPasswordForm/NewPasswordForm';

function NewPassword(){
    const [darkModeSwitchState, setdarkModeSwitchState] = useState(false);
    const handleChange=(e)=>{
        setdarkModeSwitchState(!darkModeSwitchState)   
    }

    return(
        <Container fluid className='newPassword'  style={{ backgroundImage: `url(${ darkModeSwitchState ? backgroundNewPasswordDesktopDark : backgroundNewPasswordDesktop })`}}>
         <Form.Check
                        className='darkModeSwitch'
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode"
                        defaultChecked={darkModeSwitchState}
                        onChange={handleChange}
                    />
           <Row className='newPasswordFormWrapper'>
            <Col xs={12} md={5}>
              <NewPasswordForm darkMode={darkModeSwitchState}/> 
            </Col>
           </Row>
        </Container>
    );
}

export default NewPassword;