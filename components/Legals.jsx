import React from 'react'
import { useSelector } from 'react-redux'
import { useDeviceDetected } from '../hooks/useDeviceDetected';

export const Legals = () => {
    const { movil } = useDeviceDetected();
    const { legals } = useSelector(state => state.app)
    return (
        <div className='bg-gray-100 p-5'>
            {
                (movil)
                    ? <span className='flex p-5 text-sm'> {legals} </span>
                    : <span className='flex p-8 px-20 w-6/12 m-4'>{legals}</span>
            }
        </div>
    )
}
