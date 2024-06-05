import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-center' src="https://ae01.alicdn.com/kf/S7efe538e34ff4f6d8a620cca8aa05a596.jpg_480x480.jpg_.webp" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Product Name</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: White</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>$50</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                        <AdjustIcon sx={{ width:"15px", height:"15px"}} className='text-green-600 m-2 text-sm'/>
                        <span>Delivered On March 03</span>
                    </p>
                    <p className='text-xs mx-8'>Your Item Has Been Delivered</p>
                </div> }
                {false && <p>
                    <span>Expected Delivery On March 03</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard