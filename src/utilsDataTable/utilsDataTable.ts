// @ts-nocheck

// Configure columns for DataTable component of react-data-table-component
export const columns = [
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
      minWidth: '200px',      
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
      maxWidth: '70px',
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
      maxWidth: '70px',
    },
]

// Configure the styles of rows, columns, their headers and cells for DataTable component of react-data-table-component
export const customStyles = {
    rows: {
      style: {
        minHeight: '53px', // override the row height
      },
    },
    headRow: {
      style: {
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
        whiteSpace: 'normal',
      },
    },
  }  