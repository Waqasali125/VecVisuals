import React from 'react'

export default function SearchBar({value, onChange, placeholder='Search...' }){
  return (
    <div>
      <input
        className="search-pill w-56 md:w-72 text-sm md:text-base"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}