import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackButton({to}){
  const nav = useNavigate()
  return (
    <button
      onClick={() => to ? nav(to) : nav(-1)}
      className="search-pill inline-block mb-6"
    >
      Back
    </button>
  )
}