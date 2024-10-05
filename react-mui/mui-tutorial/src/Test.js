import { Typography } from '@mui/material'
import React from 'react'
const Test = () => {
  return (
    <div>
        <Typography
            variant='h1'
            border={1} // border is a shorthand property
            sx={{
                color: 'red',
                border: '1px solid red',
            }}
        >Hello world</Typography>
    </div>
  )
}

export default Test