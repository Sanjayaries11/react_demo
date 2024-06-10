import React from 'react'
import './SearchItem.css'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input 
        type='text'
        id='search'
        autoComplete='off'
        placeholder='Search Item'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem