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

import TableRowsLoader from '@/components/components/TableLoader'
import { useDebounce } from 'use-debounce'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '@/components/components/Pagination'
import DeleteModal from '@/components/components/deleteModal'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import DialogTitle from '@mui/material/DialogTitle'
import { Link } from 'react-router-dom'
import AddSubCtegoryForm from './work-subcate/addSubCategoryform'
import TableHeader from './work-subcate/work-subcategory/tableHeader'
import {
  workSubCategoryDelete,
  workSubCategoryList,
} from '@/redux/api/public/WorkSubCategoryService'
import toast from 'react-hot-toast'
import { essentials } from '@/redux/api/public/commonService'
import { errorAlert, successAlert } from '@/helpers/global-function'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function WorkSubCategory() {
  const [open, setOpen] = React.useState(false)
  const [delid, setDelId] = useState(null)
  const [searchKey, setSearchKey] = useState('')
  const [searchValue] = useDebounce(searchKey, 1000)
  const [page, setPage] = useState(1)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [singleData, setSingleData] = useState(null)
  const [addType, setAddType] = useState(null)
  const dispatch = useDispatch()
  const subCategoryListData = useSelector((state) => state?.subWorkCategory?.workSubCategoryList)

  const [directoryPage, setDirectoryPage] = useState('admin')
  // const role = localStorage.getItem("roleName");

  const stateValues = useSelector((state) => {
    return {
      deleteLoading: state.subWorkCategory.workSubCategoryDelete.loading,
    }
  })

  // cancel search
  const cancelSearch = () => {
    setSearchKey('')
  }

  //on search
  const onSearch = (e) => {
    setSearchKey(e.target.value)
  }

  //list api
  const categoryListApi = async () => {
    try {
      const res = await dispatch(workSubCategoryList({ page, search: searchValue })).unwrap()
    } catch (errors) {
      errorAlert(errors?.error)
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
    console.log(id)
    setDeleteModalOpen(true)
  }
  console.log(singleData, 'single')
  const editDirectory = (row) => {
    console.log(row, 'roe)')
    setSingleData(row)
    setOpen(true)
    setAddType('edit')
  }

  const deleteDirectoryModalClose = () => {
    setDeleteModalOpen(false)
  }

  const delteApiFn = async () => {
    try {
      const response = await dispatch(workSubCategoryDelete(delid)).unwrap()
      setDeleteModalOpen(false)
      successAlert(response.message)
      categoryListApi()
    } catch (error) {
      errorAlert(error?.error)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleButtonClick = async () => {
    handleClose() // Call handleClose to close the form
    await categoryListApi() // Call handleAddDirectory to add directory data
  }

  const handleChange = (event) => {
    setDirectoryPage(event.target.value)
  }

  useEffect(() => {
    categoryListApi()
  }, [page, searchValue])

  return (
    <Box sx={{ overflowY: 'auto', maxHeight: '500px', mb: '40px' }}>
      <Box className="indexBox">
        <TopBreaccrumb title={'Sub Work Categories'} to={`/admin/dashboard`} />
        <Box sx={{ my: 3 }}>
          <Stack
            direction={{ lg: 'row', sm: 'column' }}
            // gap={2}
            // alignItems={"center"}
            justifyContent={'space-between'}
          >
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
            <Button
              className="New-Button"
              onClick={handleClickOpen}

              // sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              Add Work SubCategory
            </Button>

            {/* <FormControl size="small" className="directorySelect">
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={directoryPage}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'admin'}>Admin</MenuItem>
                                    <MenuItem value={'employee'}>Employee</MenuItem>
                                </Select>
                            </FormControl> */}
          </Stack>
        </Box>
        <TableContainer className="rolesPageTable">
          <Table size="small" aria-label="a dense table" className="order-table-list">
            <TableHeader />
            <TableBody>
              {subCategoryListData?.loading ? (
                <TableRowsLoader rowsNum={14} colsNum={8} />
              ) : (
                subCategoryListData?.data?.data?.map((row, i) => (
                  <TableRow>
                    {console.log(row)}
                    <TableCell style={{ textAlign: 'center' }}>{i + 1}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_cate_name}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_cate_name}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_work_price?.amount}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_online_price?.amount}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_expense_price?.amount}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_discount_price?.value}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_incentive_price?.value}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_validity?.type}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_validity?.count}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_alert_days_type == 0
                        ? 'Before'
                        : row?.sub_work_alert_days_type == 1
                          ? 'After'
                          : ''}{' '}
                    </TableCell>{' '}
                    <TableCell style={{ textAlign: 'center' }}>
                      {row?.sub_work_alert_days}{' '}
                    </TableCell>
                    <TableCell style={{ textAlign: 'center' }}>{row?.status_id} </TableCell>
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
                          onClick={() => editDirectory(row?.sub_work_id)}
                        />
                        <DeleteIcon
                          className="table-icons"
                          sx={{ color: 'red' }}
                          onClick={() => deleteDirectory(row?.sub_work_id)}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {categoryListData?.data?.data?.data?.length === 0 ? ( */}
        {/* <Box sx={{ my: 2 }}>
          <Typography>No Data Found</Typography>
        </Box> */}
        {/* ) : ( */}
        <TablePagination
          // totalRecords={categoryListData?.data?.data?.total}
          handlePageChanges={handlePageChanges}
          page={page}
        />
        {/* )} */}
        {deleteModalOpen && (
          <DeleteModal
            open={deleteModalOpen}
            close={() => deleteDirectoryModalClose()}
            title={'Delete Category'}
            content={'Are you sure want to delete this category?'}
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
            sx={{
              '& .MuiDialog-paper': {
                width: '100%',
                maxWidth: '1000px!important',
              },
            }}
          >
            <DialogTitle>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box> {singleData ? 'Edit Work SubCategory' : 'Add Work SubCategory'}</Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </DialogTitle>
            <AddSubCtegoryForm
              onClick={handleButtonClick}
              initialData={singleData}
              type={addType}
            />
          </Dialog>
        ) : null}
      </Box>
    </Box>
  )
}

export default WorkSubCategory
