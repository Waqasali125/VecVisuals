import React from 'react'
import { Link } from 'react-router-dom'

export default function ThumbnailCard({item, basePath}){
  return (
    <Link
      to={`${basePath}/${item.id}`}
      className=" p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
    >
      <div className="h-44 flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="object-contain h-full w-auto" />
        ) : (
          <div className="text-2xl md:text-3xl">No Image</div>
        )}
      </div>
      <div className="flex justify-between mt-4 text-sm md:text-base font-medium">
        <div>{item.name}</div>
        {item.count !== undefined && <div>{item.count} items</div>}
      </div>
    </Link>
  )
}