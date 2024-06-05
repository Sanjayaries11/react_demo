import React from 'react'
import './Additem.css';
import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef= useRef() 
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add item</label>
        <input
        type='text'
        id='addItem'
        ref={inputRef}
        required
        autoFocus
        placeholder='Add item'
        autoComplete='off'
        value={newItem}
        onChange={(e) =>
            setNewItem(e.target.value)}
        />
        <button type='submit'
        aria-label='AddItem'
        onChange={() =>inputRef.current.focus()}>
        <FaPlus />
        </button>
    </form>
  )
}

export default AddItem