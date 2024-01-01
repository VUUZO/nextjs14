'use client'

import parse from 'html-react-parser'
import { useEffect } from 'react'

export const ParseHTML = ({ data }: { data: string }) => {
  return (
    <div className='body-regular text-dark-400 dark:text-light-700'>
      {parse(data)}
    </div>
  )
}