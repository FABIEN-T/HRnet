// @ts-nocheck

import { useContext, useMemo, useState } from 'react'
import EmployeeContext from '../utilsContextProvider/EmployeeContextProvider'
import DataTable, { createTheme } from 'react-data-table-component'
import { columns, customStyles } from '../utilsDataTable/utilsDataTable'

import Header from '../components/Header'
import FilterComponent from '../components/FilterComponent'
import { filteredItems } from '../utilsDataTable/filteredItems'

import '../App.css'

// Function from react-data-table-component librairie to customize the theme
createTheme('pistachio', {
  text: {
    primary: 'black',
    secondary: 'var(--green0)',
  },
  background: {
    default: 'var(--rowA-bg-color)',
  },
})

export default function EmployeesList() {
  const { state } = useContext(EmployeeContext)
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  // Filtering of an employee by first name, last name, address etc...
  const filteredItemsResult = filteredItems(state.employees, filterText)

  // Manage search input (filtering) and pagination reset
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }
    return (
      // Search Input
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
        columns={columns} // Configure columns
        customStyles={customStyles} // Configure the styles of rows, columns...
        data={filteredItemsResult} // Employees to display based on filtering
        pagination // Display the pagination
        paginationResetDefaultPage={resetPaginationToggle} // To reset pagination to page 1
        subHeader // Display the input search
        subHeaderComponent={subHeaderComponentMemo} // Clear input search and reset pagination
        persistTableHead // Show the table head (columns) even when progressPending is true.
        theme="pistachio"
      />
    </div>
  )
}
