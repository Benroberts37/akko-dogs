import React, {useState, useEffect} from 'react'
import DogList from './components/DogList'

function App() {

  return (
    <div>
      <header>
        <h1>Let's see some dogs!</h1>
      </header>
      <div>
        <DogList />
      </div>
    </div>
  )
}

export default App
