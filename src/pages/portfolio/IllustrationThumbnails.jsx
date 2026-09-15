import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import SEO from '../../components/SEO'
import illustrations from '../../data/illustration_thumbnail.json'


export default function IllustrationThumbnails({ isPattern }) {
const [query, setQuery] = useState('')
const [searchParams, setSearchParams] = useSearchParams()
const activeTag = searchParams.get('tag')
const basePath = isPattern ? '/portfolio/pattern' : '/portfolio/illustration'


const filtered = illustrations.filter(
(item) => item.isPattern === !!isPattern &&
item.name.toLowerCase().includes(query.toLowerCase()) &&
(activeTag ? (item.tags || []).includes(activeTag) : true)
)

// Dynamic text based on isPattern
  const heading = isPattern ? 'Pattern Design Collections' : 'Illustration Design Collections'
  const description = isPattern
    ? 'Patterns are repeating visual elements used in backgrounds, packaging, textiles, and branding. They create rhythm, texture, and visual interest.'

    : 'Illustration is the art of creating visual storytelling through custom drawings or graphics. Custom illustrations help tell your story in a visual, creative way.'

return (
<div>
<SEO
  title={activeTag ? `${activeTag} ${isPattern ? 'Patterns' : 'Illustrations'}` : heading}
  description={description}
  keywords={isPattern ? 'patterns, seamless pattern, textile design' : 'illustration, custom illustration, vector art'}
/>

<div className="mb-8 flex justify-center">
  
<SearchBar
value={query}
onChange={setQuery}
placeholder={`Search ${isPattern ? 'patterns' : 'illustrations'}...`}
/>
</div>

<div className="text-center pb-8">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text-gray-600 mt-2">{description}</p>

        {activeTag && (
          <div className="mt-4">
            <span className="text-sm text-gray-500">
              Filtered by tag: <strong>{activeTag}</strong>
            </span>
            <button
              onClick={() => setSearchParams({})}
              className="ml-3 text-sm text-blue-600 hover:underline"
            >
              Clear
            </button>
          </div>
        )}
      </div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
{filtered.map((item) => (
<Link
key={item.id}
to={`${basePath}/${item.id}`}
className="block p-4 rounded-lg bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300"
>
<div className="h-44 flex items-center justify-center overflow-hidden">
{item.image ? (
<img
src={item.image}
alt={item.name}
className="object-contain h-full w-auto"
/>
) : (
<div className="text-xl">No Image</div>
)}
</div>
<div className="mt-4 text-center font-medium">{item.name}</div>
</Link>
))}

{filtered.length === 0 && (
  <div className="col-span-full text-center text-gray-500 py-10">
    No items found.
  </div>
)}
</div>
</div>
)
}