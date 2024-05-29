import React from 'react'

import './Content.css';
import TodoList from './todoList';


const Content = ({items,handleCheck,handleDelete}) => {
    // function handleNameChange() {
    //                 const names = ["Earn", "Grow", "Give"];
    //                const int = Math.floor(Math.random() * 3);
    //                 return names[int];
    //             }
    //   const handleClick=() =>{
    //           console.log('Thanks for clicking me')
    //   }
    //   const handleClick2=(name) =>{
    //     console.log(`Thanks for clicking me ${name}`)
    //   }  
      
  return (
    <main>
       {/* <p>Let's {handleNameChange()} Together.</p>
      <button onClick={()=>handleClick2('')}> Click Me</button>  */}

      {(items.length) ? 
      
      (
       <TodoList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
       />

      ):
       (
        <p style={{color:'red'}}>Your list is Empty !</p>
       )}
       
    </main>
    
  );
}

export default Content;