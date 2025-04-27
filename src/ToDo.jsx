// export default function ToDo({task,isDone}){
//     return(
//         <li>Task : {task} , IsDone: {isDone}</li>
//     )
// }


//consditional rendaring option 1

// export default function ToDo({task,isDone}){
//     if(isDone === true){
//         return <li>Finished : {task}</li>
//     }else{
//         return <li>Work on : {task}</li>
//     }
// }

//consditional rendering option 2
// export default function ToDo({task,isDone}){
//    if(isDone){
//     return <li>Finished : {task}</li>
    
//    }
//    return <li>work on: {task}</li>
// }

//conditional rendering using ternary operator 3

// export default function ToDo({task,isDone}){
//       return(
//         <li> {isDone?'finished' : 'work on '} : 
//       {task}</li>
//       )
//  }


//conditional rendering option 4: using && operator

// export default function ToDo({task,isDone}){
//     return(
//         <li>{task} {isDone && 'done'}</li>
//     )
// }

//conditional rendering option 4: using (|| or) operator
export default function ToDo({task,isDone}){
    return(
        <li>{task} {isDone || 'do it'}</li>
    )
}
