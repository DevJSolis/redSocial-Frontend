import { useState } from 'react'

import bgSally from './images/Saly-10.png'
import userImg from './images/fotoP.png'
import { Container } from 'react-bootstrap'

import './Profile_header.css'

function App() {

  return (

    <Container fluid>
      <div className='rectangle'>
        <img className= 'imgH'src={bgSally} alt="header image"/>
      </div>
      <div className='profileImg'>
          <img src={userImg} id='profileImg' alt="React logo" />
      </div>
      <div id='profileName'>
        <h1>Sally Méndez</h1>
      </div> 
    </Container>

  )
}

export default App


{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={bgSally} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={bgSally} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite +- React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}