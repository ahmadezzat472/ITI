import { Chip } from '@mui/material'
import React from 'react'

export default function MyChip() {
  return (
    <div>
        <Chip label='basic'></Chip>

        <Chip label='clickable' onClick= {() => alert("clicked")} color='primary'> </Chip>
        <Chip label='clickable' onDelete= {() => alert("deleted")} color='error'> </Chip>
    </div>
  )
}
