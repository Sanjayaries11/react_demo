import React from 'react'

import LineItem from './LineItem';
const todoList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
          {items.map((item) =>(
            <LineItem 
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
          ))}
       </ul>
  )
}

export default todoList