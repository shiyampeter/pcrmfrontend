/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  Button,
  Dialog,
  IconButton,
  Typography,
  Slide,
} from '@mui/material'
import TopBreaccrumb from '@/components/components/TopBreadcrumb'
import SearchInput from '@/components/components/searchInput'
import TableHeader from './category/work-category/tableHeader'
import TableRowsLoader from '@/components/components/TableLoader'
import { useDebounce } from 'use-debounce'
import CloseIcon from '@mui/icons-material/Close'

import { useDispatch } from 'react-redux'
import TablePagination from '@/components/components/Pagination'
import DeleteModal from '@/components/components/deleteModal'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCategoryForm from './category/addCategoryform'
import DialogTitle from '@mui/material/DialogTitle'

import { workCategoryDelete, workCategoryList } from '@/redux/api/public/workCategoryService'
import Switch from '@mui/material/Switch'
import toast from 'react-hot-toast'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const label = { inputProps: { 'aria-label': 'Switch demo' } }
function WorkCategory() {
  const [open, setOpen] = React.useState(false)
  const [delid, setDelId] = useState(null)
  const [categoryListData, setCategoryListData] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [searchValue] = useDebounce(searchKey, 1000)
  const [page, setPage] = useState(1)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [singleData, setSingleData] = useState(null)
  const [addType, setAddType] = useState(null)
  const dispatch = useDispatch()

  // cancel search
  const cancelSearch = () => {
    setSearchKey('')
  }
  console.log(delid)
  //on search
  const onSearch = (e) => {
    setSearchKey(e.target.value)
  }

  //list api
  const categoryListApi = async () => {
    try {
      const res = await dispatch(workCategoryList({ page, search: searchValue })).unwrap()
      console.log(res)
      setCategoryListData(res)
    } catch (errors) {
      toast.error(errors?.error)
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

  const deleteDirectory = (id) => {
    setDelId(id)
    setDeleteModalOpen(true)
  }

  const editDirectory = (id) => {
    setSingleData(id)
    setOpen(true)
    setAddType('edit')
  }

  const deleteDirectoryModalClose = () => {
    setDeleteModalOpen(false)
  }

  const delteApiFn = async () => {
    try {
      const response = await dispatch(workCategoryDelete(delid)).unwrap()
      toast.success(response.message)
      setDeleteModalOpen(false)
      categoryListApi()
    } catch (errors) {
      toast.error(errors?.message)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleButtonClick = async () => {
    handleClose() // Call handleClose to close the form
    await categoryListApi() // Call handleAddDirectory to add directory data
  }

  useEffect(() => {
    categoryListApi()
  }, [page, searchValue])

  return (
    <Box sx={{ overflowY: 'auto', maxHeight: '600px' }}>
      <Box className="indexBox">
        <TopBreaccrumb title={'Categories'} to={`/admin/dashboard`} />
        <Box sx={{ my: 3 }}>
          <Stack
            direction={{ lg: 'row', sm: 'column' }}
            // gap={2}
            // alignItems={"center"}
            justifyContent={'space-between'}>
            <SearchInput
              sx={{
                border: '1px solid #303067',
                borderRadius: '20px',
                height: '32.69px',

                '&.Mui-focused ': {
                  border: '1px solid #6473ff',
                },
                width: { xs: '100%', sm: '340px' },
              }}
              value={searchKey || ''}
              onChange={(e) => onSearch(e)}
              cancelSearch={cancelSearch}
            />
            <Button className="AddBtn" onClick={handleClickOpen}>
              Add New Category
            </Button>
          </Stack>
        </Box>
        <TableContainer className="rolesPageTable">
          <Table size="small" aria-label="a dense table" className="order-table-list">
            <TableHeader />
            <TableBody>
              {categoryListData?.loading ? (
                <TableRowsLoader rowsNum={5} colsNum={5} />
              ) : (
                categoryListData?.data?.map((row, i) => (
                  <TableRow>
                    <TableCell style={{ textAlign: 'center' }}>{i + 1}</TableCell>

                    <TableCell style={{ textAlign: 'center' }}>{row.work_name}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row.work_type == 0 ? 'Mini' : 'Online'}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row.work_tracking_no}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row.work_tracking_website}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      <Switch
                        checked={row.work_completed}
                        onChange={() => handleSwitchChange(row.id)}
                        {...label}
                      />
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction={'row'}
                        gap={2}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {/* <Link
                          // to={`/admin/category/${row.unique_label}`}
                          to="">
                          <VisibilityIcon className="table-icons" sx={{ color: 'green' }} />
                        </Link> */}

                        <EditIcon
                          sx={{ color: 'blue' }}
                          className="table-icons"
                          onClick={() => editDirectory(row.work_id)}
                        />
                        <DeleteIcon
                          className="table-icons"
                          sx={{ color: 'red' }}
                          onClick={() => deleteDirectory(row.work_id)}
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
            title={'Delete Work Category'}
            content={'Are you sure want to delete this category?'}
            submit={delteApiFn}
            // loading={stateValues.deleteLoading}
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
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box> {singleData ? 'Edit Category' : 'Add Category'}</Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </DialogTitle>
            <AddCategoryForm onClick={handleButtonClick} initialData={singleData} type={addType} />
          </Dialog>
        ) : null}
      </Box>
    </Box>
  )
}

export default WorkCategory
