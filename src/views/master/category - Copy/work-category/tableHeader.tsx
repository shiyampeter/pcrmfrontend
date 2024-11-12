import React from 'react'
import { TableHead, TableRow, TableCell } from '@mui/material'
import { CATEGORY_HEADER } from '../../../../components/constants/tableHeader'

function TableHeader() {
  const header = CATEGORY_HEADER
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
