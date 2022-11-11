import React from 'react';
//  import logo from './logo.svg';
import './WritePost.css';
import foto from './images/Mg.png';


function WritePost() {
  return (


    <div className='container'>
      <div className='writepost'>
        <div className="container-fotoperfil">
          <img src={foto} className='foto-perfil' alt='Foto de perejil' />
        </div>
        <div className='container-post'>
          <form className='form '>
            <textarea name="text" id="" cols="5" rows="3" placeholder="Say something... " required></textarea>
          </form>
          <div className='bottom-items'>
            <div className="items">
              <button className='btn'><i className="fa fa-lg fa-picture-o"></i></button>
              <button className='btn'><i className="fa fa-lg fa-smile-o"></i></button>
              <button className='btn'><i className="fa fa-lg fa-podcast"></i></button>
            </div>

            <div className='sendbutton'>
              <button type="button" className="btn btn-primary ">Send</button>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default WritePost;