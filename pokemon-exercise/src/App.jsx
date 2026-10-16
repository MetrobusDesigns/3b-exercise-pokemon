import { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon'
import Posts from './components/Posts'
import './App.css'
import SinglePost from './components/SinglePost'

function App() {
 

  return (
    <>
      <h2>Pokemon API</h2>
      <Pokemon />
      {/* <Posts /> */}
      <SinglePost />
    </>
  )
}

export default App
