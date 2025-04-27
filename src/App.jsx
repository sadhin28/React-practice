import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <h1>vite + React</h1>
     <Person></Person>
    <Student></Student>
    </>
  )
}

 function Person(){
  const age = 23;
  const person ={
    name:'sadhin',
    age:24,
    home:'Barishal'
  }
      return(
        <h3>I am a {person.name} with age : {person.age} and home {person.home}</h3>
      )
}
function Student(){
    return(
      <div className='student'>
        <h3>This is a student</h3>
        <p>Name :</p>
        <p>age :</p>
        <p>home :</p>
      </div>
    )
}
export default App
