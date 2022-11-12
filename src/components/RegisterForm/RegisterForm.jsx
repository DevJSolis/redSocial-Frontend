import React, { useState } from 'react';
import './RegisterForm.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';

const RegisterForm = (props) => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
      });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }else{
            setValidated(true);
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
            <Alert.Heading>User:{formData.name}</Alert.Heading>
            <hr />
            <Alert.Heading>Password:{formData.password}</Alert.Heading>
      </Alert>
        <Form id="RegisterForm" noValidate validated={validated} onSubmit={handleSubmit}>
           <Form.Group as={Col} xs="10" className='inputsGroup'>
                    <Col className="text-start text">
                        <h1 className={`loginTitle darkmode_${props.darkMode}`}>
                            <strong>
                                Descubre lo nuevo                            
                            </strong>
                        </h1>
                        <h2 className={`loginTitle darkmode_${props.darkMode}`}>
                            <strong>
                                Únete hoy                            
                            </strong>
                        </h2>
                    </Col>
                    <Col className='mt-4 '>
                        <Form.Control className="formControl" value={formData.name} onChange={handleChangeInputs}  name="name" type="text" placeholder="Ingrese su nombre" required />
                        <Form.Control.Feedback>Campo Completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-4 '>
                        <Form.Control className="formControl" value={formData.lastname} onChange={handleChangeInputs}  name="lastname" type="text" placeholder="Ingrese su apellido" required />
                        <Form.Control.Feedback>Campo Completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-4 '>
                        <Form.Control className="formControl" value={formData.email} onChange={handleChangeInputs}  name="email" type="email" placeholder="Ingrese su email" required />
                        <Form.Control.Feedback>Campo Completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-4 mb-4'>
                        <Form.Control className="formControl" value={formData.password} onChange={handleChangeInputs}  name="password" type="password" placeholder="password" required />
                        
                        <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-2'>
                        <Button type="submit" className='form-btn'>Registrate</Button>
                    </Col>
                    
                </Form.Group>

            </Form>
        </> 
    );
}
 
export default RegisterForm;