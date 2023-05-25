// @ts-nocheck

export const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
      // minWidth: '70px',      
      // maxWidth: '90px',
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
      // minWidth: '70px',
      // maxWidth: '90px',
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
      // maxWidth: '120px',
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
      // minWidth: '102px',
    },
    {
      name: 'Date of birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
      // minWidth: '105px',
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
      // width: '90px',
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
        whiteSpace: 'normal',
      },
    },
  }

  
// export default columns