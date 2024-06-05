import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg boder rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-center' src="https://ae01.alicdn.com/kf/S7efe538e34ff4f6d8a620cca8aa05a596.jpg_480x480.jpg_.webp" alt="" />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'> Men's Sneakers</p>
                <p className='opacity-70'>Size: L, White</p>
                <p className='opacity-70 mt-2'> Seller: Crishtaliyo Fashion</p>
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold'>$100</p>
                    <p className='line-through opacity-50'>200</p>
                    <p className='text-green-600 font-semibold'>50% off</p>
                </div>
            </div>
            
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>3</span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>
        </div>
    </div>
  )
}

export default CartItem