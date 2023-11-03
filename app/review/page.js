import Link from 'next/link'
import React from 'react'
import { getReviews } from '../../lib/reviews'

async function Review() {
  const reviews = await getReviews();
  return (
    <div className='container flex flex-row flex-wrap justify-center items-center gap-3 px-32'>
        {
          reviews.map((review)=>(
            <Link href={`review/${review.slug}`} key={review.slug}>
                      <div className='w-80 h-56 rounded bg-white'>
                            <img src={review.image}
                                width="320" 
                                height="180"
                                className='rounded-t'
                                />
                            <h2 className='text-black py-2  text-center'>{review.title}</h2>
                        </div>
            </Link>

          ))
        }
    </div>
  )
}

export default Review