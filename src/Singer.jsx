export default function Singer({singer}){
    //use destructuring
   const {id,name,age}=singer
    return(
        <div>
            <h3>Singer:{name} </h3>
            <p>age: {age}</p>
            <p>Id: {id}</p>
        </div>
    )
}