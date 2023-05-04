// @ts-nocheck

import React from 'react'
import { Link } from 'react-router-dom'
import DivLogo from '../components/DivLogo'
import styled from 'styled-components'
import DataTable, { createTheme } from 'react-data-table-component'

import './homeForm.css'

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  border: 2px solid #576c05;
  &:hover {
    cursor: pointer;
  }
`

const ClearButton = styled.button`
  color: black;
  background: #eaede0;
  border-top: 2px solid #576c05;
  border-bottom: 2px solid #576c05;
  border-right: 2px solid #576c05;
  border-left: 0px solid #576c05;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 36px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    color: white;
    background: #6e8510;
  }
`

createTheme('solarized', {
  text: {
    primary: 'black',
    secondary: 'black',
  },
  background: {
    default: '#f4f6ef',
  },
  striped: true,
})

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      // placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
)

const customStyles = {
  rows: {
    style: {
      minHeight: '53px', // override the row height
    },
  },
  headRow: {
    style: {
      // borderStyle: 'solid',
      // borderBottom: '2px solid #576c05',
      // borderTopColor: 'pink',
      fontSize: '110%',
      fontWeight: 'bold',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      background: '#6e8510',
      color: 'white',
    },
  },

  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
}

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    sortable: true,
    maxWidth: '130px',
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row) => row.startDate,
    sortable: true,
    width: '100px',
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    sortable: true,
    width: '120px',
  },
  {
    name: 'Date of birth',
    selector: (row) => row.dateOfBirth,
    sortable: true,
    width: '115px',
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    sortable: true,
    width: '180px',
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
    width: '100px',
  },
  {
    name: 'State',
    selector: (row) => row.state,
    sortable: true,
    width: '70px',
  },
  {
    name: 'Zip Code',
    selector: (row) => row.zipCode,
    sortable: true,
  },
]

export default function EmployeesList() {
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false)
  const filteredItems = JSON.parse(localStorage.getItem('employees')).filter(
    (object) =>
      // item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
      (object.firstName &&
        object.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (object.lastName &&
        object.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (object.startDate && object.startDate.includes(filterText)) ||
      (object.department &&
        object.department.toLowerCase().includes(filterText.toLowerCase())) ||
      (object.dateOfBirth && object.dateOfBirth.includes(filterText)) ||
      (object.street && object.street.includes(filterText)) ||
      (object.city &&
        object.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (object.state &&
        object.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (object.zipCode && object.zipCode.includes(filterText))
  )

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <div className="datatable">
      <DivLogo />
      <h2>Current Employees</h2>
      <DataTable
        columns={columns}
        customStyles={customStyles}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        theme="solarized"
      />
      <Link to="/" className="linkCurrentEmployees">
        Home
      </Link>
    </div>
  )
}
