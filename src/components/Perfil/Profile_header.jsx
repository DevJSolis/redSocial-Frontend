import { useState } from 'react'

import bgSally from './assets/header/sally_bg.png'
import userImg from './assets/header/profile.png'

import './Profile.css'

function App() {

  return (
    <div className="App">
      <header>
        <div id='rectangle'>
          <img src={bgSally} alt="background image"/>
        </div>
        <div id='profileImg'>
          <img src={userImg} id='profileImg' alt="React logo" />
        </div>
        <div id='profileName'>
          <h1>Sally Méndez</h1>
        </div>
      </header>
    </div>
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