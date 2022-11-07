import React, { useState } from 'react';
import './RecoveryPasswordForm.css';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function RecoveryPasswordForm(props) {
    return ( 

        <div className='recoveryPasswordForm'>
            <div className='centeritems'>
            <h5 className={`RecoveryTitle darkmode_${props.darkMode}`}>
                            <strong>
                                Recupera tu contraseña
                            </strong>              
            </h5>
            
            <div>
                Ingresa tu correo electronico para buscar tu cuenta.
            </div>
            <br/>
            <div >
                <input type= "text"  className='formControl' placeholder='Usuario' required ></input>
            </div>
            <div>
            <br/>
                <Button type="submit" className='formControl_btn'>Buscar</Button>
            </div>
            </div>
        </div>
     );
}

export default RecoveryPasswordForm;