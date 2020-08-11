import React from 'react'

type Props = {
  name: string
  email: string
  phone: string
}

const Contact: React.FC<Props> = (props) => {
  return (
    <div className='wfull bg-gray-200 rounded flex py-8 px-4'>
      <div className='h-full w-1/3'>
        <div className='bg-blue-200 rounded rounded-full h-16 w-16 shadow'></div>
      </div>
      <div>
        <h1 className='text-black font-bold'>{props.name}</h1>
        <p className='opacity-75'>{props.email.toLowerCase()}</p>
        <p className='opacity-75'>{props.phone}</p>
      </div>
    </div>
  )
}

export { Contact }
