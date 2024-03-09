"use client"
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { Suspense } from 'react'


const AnothersPaginationButtons = () => {
   
  return (
    <Suspense>
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
       <Link href={"/anotherdashboard"}>
       <div className='flex flex-col cursor-pointer items-center hover:underline'>
       <p>Previous</p></div>
       </Link>
      
       
    </div>
    </Suspense>
  )
}

export default AnothersPaginationButtons
