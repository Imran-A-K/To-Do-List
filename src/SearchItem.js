import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        type="text"
        id='search'
        role='searchbox'
        placeholder='Search Task'
        value={search}
        onChange={(event)=> setSearch(event.target.value)}
        />
    </form>
  )
}

export default SearchItem