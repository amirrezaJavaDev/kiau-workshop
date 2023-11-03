import React from 'react'
import { getReview } from '../../../lib/reviews'


export default async function ReviewContent({params: { slug }}) {
  const review = await getReview(slug);
  
  return (
    <div className='container px-10 w-[900px] h-screen mx-auto'>
        <h1 className='font-orbitron font-bold text-2xl'>{review.title}</h1>
        <span className='italic'>{review.date}</span>
        <img src={review.image} width="400px"  className='rounded-t-md mx-auto'/>
        <article dangerouslySetInnerHTML={{__html:review.body}} className='max-w-screen-sm prose prose-slate'/>
    </div>

  )
}
