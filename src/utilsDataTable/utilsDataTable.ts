// @ts-nocheck

export const columns = [
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
      maxWidth: '130px',
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
      minWidth: '130px',
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

export const customStyles = {
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

  
// export default columns