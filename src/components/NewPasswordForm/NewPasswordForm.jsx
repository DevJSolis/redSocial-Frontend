import React, { useState } from 'react';
import './NewPasswordForm.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';

function NewPasswordForm(props){
    console.log(props.darkMode)

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        Codigo: "",
        Codigo2: "",
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
        }
  
    };

    const handleChangeInputs = (event) => {
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
        }));
      
      
    } 

    return ( 
       <div className={`newPasswordForm darkmode-${props.darkMode}`}>
        
         <Form id="passwordForm" noValidate validated={validated} onSubmit={handleSubmit}>
           <Form.Group as={Col} xs="10" className='inputsGroup'>
                    <Col className="text-start text">
                        <h5 className={`passwordTitle darkmode_${props.darkMode}`}>
                            <strong>
                               Ingresa tu nueva contraseña
                            </strong>
                        </h5>
                    </Col>
                    <Col className='mt-2 mb-2'>
                        <Form.Control className="formControl" value={formData.Codigo} onChange={handleChangeInputs}  name="Codigo" type="password" placeholder="Ingresa el codigo" required />
                        <Form.Control.Feedback>Campo Completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-2 mb-2'>
                        <Form.Control className="formControl" value={formData.Codigo2} onChange={handleChangeInputs}  name="Codigo2" type="password" placeholder="Ingresa el codigo" required />
                        <Form.Control.Feedback>Campo completado!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio!
                        </Form.Control.Feedback>
                    </Col>

                    <Col className='mt-2 mb-2'>
                        <Button type="submit" className='form-btn'>Cambiar contraseña</Button>
                    </Col>
                    
                </Form.Group>

            </Form>
       </div>
       

    );
}

export default NewPasswordForm;