// @ts-nocheck

import React from 'react'
import styled from 'styled-components'
import DataTable from 'react-data-table-component'

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

  &:hover {
    cursor: pointer;
  }
`

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

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

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    sortable: true,
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
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: 'Date of birth',
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (row) => row.state,
    sortable: true,
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
    <DataTable
      title="Current Employees"
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  )
}

// function EmployeesList() {
//   return (
//     <div>
//       <h1>Current Employees</h1>
//     </div>
//   )
// }

// export default EmployeesList
