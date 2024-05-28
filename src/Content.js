 import React from 'react'
 import { useState } from 'react';
 import { FaTrashAlt } from "react-icons/fa";
import './Content.css';
 



const Content = () => {
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
      const [items,setItems] = useState(
        [
          {
            id: 1,
            checked: true,
            item: "practice coding"
          },
          {
            id: 2,
            checked: false,
            item: "play cricket"
          },
          {
            id: 3,
            checked: false,
            item: "Read about AI"
          }
        ]);
        
        const handleCheck = (id) =>{
            const listItems = items.map((item) => 
            item.id===id ? {...item, checked: !item.checked} : item)
            setItems(listItems)
            localStorage.setItem("todo_list" ,JSON.stringify(listItems))  
        }

        const handleDelete =(id) =>{
          const listItems = items.filter((item) =>
          item.id!==id)
          setItems(listItems)
          localStorage.setItem("todo_list", JSON.stringify(listItems))
        }
  return (
    <main>
      {/* <p>Let's {handleNameChange()} Together.</p>
      <button onClick={()=>handleClick2('sanjay kumar')}> Click Me</button> */}
      {items.length ? (<ul>
          {items.map((item) =>(
            <li className='item' key={item.id}>
            <input 
            type="checkbox"
            checked={item.checked}
            onChange={() =>handleCheck(item.id)}></input>

            <label style={(item.checked)?
            {textDecoration:'line-through'}:null} 
            onDoubleClick={() =>handleCheck(item.id)}>{item.item}</label>

            <FaTrashAlt 
            role="button"
            tabIndex="0"
            onClick={() =>handleDelete(item.id)} />
          </li>
          ))}
       </ul>):(
        <p style={{color:'red'}}>Your list is Empty !</p>
       )}
       
    </main>
    
  );
}

export default Content;