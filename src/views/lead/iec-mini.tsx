/* eslint-disable react-hooks/exhaustive-deps */
import TableRowsLoader from '@/components/components/TableLoader'
import TopBreaccrumb from '@/components/components/TopBreadcrumb'
import SearchInput from '@/components/components/searchInput'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import TablePagination from '@/components/components/Pagination'
import DeleteModal from '@/components/components/deleteModal'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch } from 'react-redux'

import TableHeader from '@/components/components/tableHeader'
import { IECMINI_HEADER } from '@/components/constants/tableHeader'
import { errorAlert, successAlert } from '@/helpers/global-function'
import { iecMiniDelete, iecMiniList } from '@/redux/api/public/iecMiniService'
import { useSelector } from 'react-redux'
import AddIecForm from './addIecForm'
import AddOnlineForm from './addOnlineForm'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const label = { inputProps: { 'aria-label': 'Switch demo' } }
function IecMini() {
  const [open, setOpen] = React.useState(false)
  const [online, setOnline] = React.useState(false)
  const [delid, setDelId] = useState(null)
  const [categoryListData, setCategoryListData] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [searchValue] = useDebounce(searchKey, 1000)
  const [page, setPage] = useState(1)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [singleData, setSingleData] = useState(null)
  const [addType, setAddType] = useState(null)
  const dispatch = useDispatch()
  const stateValues = useSelector((state) => {
    return {
      deleteLoading: state.iecMini.iecMiniDelete.loading,
    }
  })

  const categoryListDataLoading = useSelector((state) => state.iecMini.iecMiniList)

  // cancel search
  const cancelSearch = () => {
    setSearchKey('')
  }
  //on search
  const onSearch = (e) => {
    setSearchKey(e.target.value)
  }

  //list api
  const iecMiniListApi = async () => {
    try {
      const res = await dispatch(iecMiniList({ page, search: searchValue })).unwrap()
      setCategoryListData(res)
    } catch (errors) {
      errorAlert(errors?.message)
    }
  }

  const handlePageChanges = (_event, pageValue) => {
    setPage(pageValue)
  }

  const handleClickOpen = () => {
    setSingleData(null)
    setOpen(true)
    setAddType('add')
  }

  const handleClickOnline = () => {
    setSingleData(null)
    setOnline(true)
    setAddType('add')
  }

  const deleteDirectory = (id) => {
    setDelId(id)
    setDeleteModalOpen(true)
  }

  const editDirectory = (id, work_type) => {
    setSingleData(id)
    if (work_type == 'Online') {
      setOnline(true)
    } else {
      setOpen(true)
    }
    setAddType('edit')
  }

  const deleteDirectoryModalClose = () => {
    setDeleteModalOpen(false)
  }

  const delteApiFn = async () => {
    try {
      const response = await dispatch(iecMiniDelete(delid)).unwrap()
      successAlert(response.message)
      setDeleteModalOpen(false)
      iecMiniListApi()
    } catch (errors) {
      errorAlert(errors?.message)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setOnline(false)
  }

  const handleButtonClick = async () => {
    handleClose() // Call handleClose to close the form
    await iecMiniListApi() // Call handleAddDirectory to add directory data
  }

  useEffect(() => {
    iecMiniListApi()
  }, [page, searchValue])

  return (
    <Box sx={{ overflowY: 'auto', maxHeight: '500px', mb: '40px' }}>
      <Box className="indexBox">
        <TopBreaccrumb title={'Iec List'} to={`/admin/dashboard`} />
        <Box sx={{ my: 3 }}>
          <Stack
            direction={{ lg: 'row', sm: 'column' }}
            // gap={2}
            // alignItems={"center"}
            justifyContent={'space-between'}
          >
            <Box>
              <SearchInput
                sx={{
                  border: '1px solid #303067',
                  borderRadius: '20px',
                  height: '32.69px',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  '&.Mui-focused ': {
                    border: '1px solid #6473ff',
                  },
                  width: { xs: '100%', sm: '340px' },
                }}
                value={searchKey || ''}
                onChange={(e) => onSearch(e)}
                cancelSearch={cancelSearch}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Button className="New-Button" onClick={handleClickOpen}>
                Add Iec Mini
              </Button>
              <Button className="New-Button" onClick={handleClickOnline}>
                Add Iec Online
              </Button>
            </Box>
          </Stack>
        </Box>
        <TableContainer className="rolesPageTable">
          <Table size="small" aria-label="a dense table" className="order-table-list">
            <TableHeader typeHeader={IECMINI_HEADER} />
            <TableBody>
              {categoryListDataLoading?.loading ? (
                <TableRowsLoader rowsNum={5} colsNum={8} />
              ) : (
                categoryListDataLoading?.data?.data?.map((row, i) => (
                  <TableRow>
                    <TableCell style={{ textAlign: 'center' }}>{i + 1}</TableCell>

                    <TableCell style={{ textAlign: 'center' }}>{row.work?.work_name}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row.sub_work?.sub_work_cate_name}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_name}</TableCell>

                    <TableCell style={{ textAlign: 'center' }}>{row.iec_complete}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_work_type}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.iec_complete == 0 ? 'Not Completed' : 'Completed'}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_mobile}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_amount}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_expense}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row.iec_q_office_expense}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_discount}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.iec_q_income}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row.iec_paid === 0 ? 'Not Paid' : 'Paid'}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row.iec_online_payment_gothrough}
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction={'row'}
                        gap={2}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {/* <Link
                          // to={`/admin/category/${row.unique_label}`}
                          to="">
                          <VisibilityIcon className="table-icons" sx={{ color: 'green' }} />
                        </Link> */}

                        <EditIcon
                          sx={{ color: 'blue' }}
                          className="table-icons"
                          onClick={() => editDirectory(row.iec_q_id, row.iec_q_work_type)}
                        />
                        <DeleteIcon
                          className="table-icons"
                          sx={{ color: 'red' }}
                          onClick={() => deleteDirectory(row.iec_q_id)}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {categoryListData?.data?.length === 0 ? (
          <Box sx={{ my: 2 }}>
            <Typography>No Data Found</Typography>
          </Box>
        ) : (
          <TablePagination
            totalRecords={categoryListData?.data?.total}
            handlePageChanges={handlePageChanges}
            page={page}
          />
        )}
        {deleteModalOpen && (
          <DeleteModal
            open={deleteModalOpen}
            close={() => deleteDirectoryModalClose()}
            title={'Delete Iec'}
            content={'Are you sure want to delete this iec?'}
            submit={delteApiFn}
            loading={stateValues.deleteLoading}
          />
        )}

        {open === true ? (
          <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box> {singleData ? 'Edit Iec ' : 'Add Iec'}</Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </DialogTitle>
            <AddIecForm onClick={handleButtonClick} initialData={singleData} type={addType} />
          </Dialog>
        ) : null}

        {online === true ? (
          <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={online}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box> {singleData ? 'Edit Iec ' : 'Add Iec Online'}</Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </DialogTitle>
            <AddOnlineForm onClick={handleButtonClick} initialData={singleData} type={addType} />
          </Dialog>
        ) : null}
      </Box>
    </Box>
  )
}

export default IecMini
