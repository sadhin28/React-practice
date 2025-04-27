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
    <Student name="Taosif" grade="7" score="99"></Student>
    <Student  name="Rewran" grade="4" score="90"></Student>
    <Student name="Rayhan" grade="8" score="99"></Student>
    <Developer></Developer>
    <Device name="Laptop" price="115150"></Device>
    <Device name="mobile" price="11298"></Device>
    <Device name="watch" price="400"></Device>
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
const { grade, score,name}={ grade:'7',score:'99',name:'a'}
function Student({grade='0',score='0',name='Not Found'}){

    return(
      <div className='student'>
        
        <h3>This is a student</h3>
        <p>Name: {name}</p>
        <p>Grade : {grade}</p>
        <p>Score: {score}</p>
      </div>
    )
}
function Developer(){
  const DeveloperStyle ={
     margin:'20px',
     padding:'20px',
     border:'2px solid purple',
     borderRadius:'10px'
  }
  return (
     <div style={{
      margin:'20px',
      padding:'20px',
      border:'2px solid purple',
      borderRadius:'10px'
   }}>
       <h4>devu loper</h4>
       <p>age: 40 </p>
     </div>
  )
}
function Device(props){
  // console.log(props)
   return (
    <h2>This Device: {props.name} & price: {props.price}</h2>
   )
}
export default App
