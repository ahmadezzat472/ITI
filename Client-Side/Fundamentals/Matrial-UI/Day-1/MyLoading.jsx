import { CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

export default function MyLoading() {
  return (
    <div>
        <CircularProgress />

        <LinearProgress  variant='buffer'/>
        <LinearProgress  variant='determinate'/>
        <LinearProgress  variant='indeterminate'/>
        <LinearProgress  variant='query'/>
    </div>
  )
}
