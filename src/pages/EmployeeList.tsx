// @ts-nocheck

import { useContext, useMemo, useState } from 'react'
import EmployeeContext from '../utilsContextProvider/EmployeeContextProvider'

import Header from '../components/Header'
import FilterComponent from '../components/FilterComponent'

import { columns, customStyles } from '../utilsDataTable/utilsDataTable'
import DataTable, { createTheme } from 'react-data-table-component'

import '../App.css'

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
  const { state } = useContext(EmployeeContext)
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const filteredItems = state.employees.filter(
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

  const subHeaderComponentMemo = useMemo(() => {
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
