import React, {Fragment} from 'react';
import logo from './logo.svg';
import './Post.css';
import foto from './images/Mg.png';


function Post() {
  return (
    <Fragment>
      <div className='divmaestro'>

        <div className='fperfil'>
          <img src={foto} className='foto'/>
        </div>
        <div className='post'>
          <div className='divtexto'>
            <input type="text" placeholder="What's happening" className='texto'></input>
            <br/>
            <br/>
          </div>
          <div className='extrasdiv'>
            <button className='extras'><i class="fa fa-picture-o fa-lg" ></i></button>
            <button className='extras'><i class="fa fa-smile-o fa-lg" ></i></button>
            <button className='extras'><i class="fa fa-spinner fa-lg" ></i></button>
          </div>
          <div className='enviardiv'>
            <button className='boton'>Send</button>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default Post;