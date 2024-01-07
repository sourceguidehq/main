import React from 'react'

type Props = {
    org:String
}

export default function page({ params }: { params: { org: string } }) {
  return (
    <div className='dark:text-white'>
        {params.org}
        </div>
  )
}