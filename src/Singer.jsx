import './Singer.css'
export default function Singer({singer}){
    //use destructuring
   const {id,name,age}=singer
    return(
        <div className='singerss'>
            <h3>Singer:{name} </h3>
            <p>age: {age}</p>
            <p>Id: {id}</p>
        </div>
    )
}