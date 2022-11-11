import React, { useState } from 'react';
import './LoginForm.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';

const LoginForm = (props) => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        user: "",
        password: "",
      });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }else{
            event.preventDefault();
            event.stopPropagation();
            setShow(true)
        }
  
    };

    const handleChangeInputs = (event) => {
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
        }));
      
      
    } 

    return ( 
        <>
        <Alert show={show} variant="info" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>User:{formData.user}</Alert.Heading>
            <hr />
            <Alert.Heading>Password:{formData.password}</Alert.Heading>
      </Alert>
        <Form id="loginForm" noValidate validated={validated} onSubmit={handleSubmit}>
           <Form.Group as={Col} xs="10" className='inputsGroup'>
                    <Col className="text-start text">
                        <h2 className={`loginTitle darkmode_${props.darkMode}`}>
                            <strong>
                                Iniciar Sesión
                            </strong>
                        </h2>
                    </Col>
                    <Col className='mt-4 mb-4'>
                        <Form.Control className="formControl" value={formData.user} onChange={handleChangeInputs}  name="user" type="text" placeholder="Usuario" required />
                        <Form.Control.Feedback>Campo Completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-4 mb-4'>
                        <Form.Control className="formControl" value={formData.password} onChange={handleChangeInputs}  name="password" type="password" placeholder="Password" required />
                        <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-2 mb-4'>
                        <Button type="submit" className='form-btn'>Iniciar Sesión</Button>
                    </Col>

                    <Col className='mt-2 mb-4 ctaRow'>
                        <Form.Text className="text-muted lost-password">
                            Olvide la contraseña                        
                        </Form.Text>

                        <Form.Text className="text-muted">
                            Registro
                        </Form.Text>
                    </Col>
                    
                </Form.Group>

            </Form>
        </> 
    );
}
 
export default LoginForm;