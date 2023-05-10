// @ts-nocheck

import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import FilterComponent from '../components/FilterComponent'

import { columns, customStyles } from '../utilsDataTable/utilsDataTable'
import DataTable, { createTheme } from 'react-data-table-component'

// import './homeForm.css'
import '../App.css'
import EmployeeContext from '../utilsContextProvider/EmployeeContextProvider'

createTheme('pistachio', {
  text: {
    primary: 'black',
    secondary: 'black',
  },
  background: {
    default: '#f4f6ef',
  },
  striped: true,
})

export default function EmployeesList() {
  const { employees } = useContext(EmployeeContext)

  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false)
  console.log('EmployeesList employees', employees)
  // const filteredItems = JSON.parse(localStorage.getItem('employees')).filter(
  const filteredItems = employees.filter(
    (object) =>
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
    <div className="currentEmployees">
      <Header link="/" nameLink="Home" title="Current Employees" />
      <DataTable
        columns={columns}
        customStyles={customStyles}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        theme="pistachio"
      />
    </div>
  )
}
