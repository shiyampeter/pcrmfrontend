import React from 'react'
import { TableHead, TableRow, TableCell } from '@mui/material'

function TableHeader(props) {
  const { typeHeader } = props
  const header = typeHeader

  console.log(header, 'header')
  return (
    <>
      {!!header.length && (
        <TableHead sx={{ '& th': { border: 0 } }}>
          <TableRow className="tableHeader" sx={{ '& td': { border: 0 } }}>
            {header.map((h) => (
              <TableCell width={h.width} key={h.id} sx={{ textAlign: 'center' }}>
                {h.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}
    </>
  )
}

export default TableHeader
