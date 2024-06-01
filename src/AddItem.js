import React from 'react'
import './Additem.css';
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add item</label>
        <input
        type='text'
        id='addItem'
        required
        autoFocus
        placeholder='Add item'
        autoComplete='off'
        value={newItem}
        onChange={(e) =>
            setNewItem(e.target.value)}
        />
        <button type='submit'
        aria-label='AddItem'>
        <FaPlus />
        </button>
    </form>
  )
}

export default AddItem