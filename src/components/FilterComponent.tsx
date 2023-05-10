// @ts-nocheck
import styled from 'styled-components'

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

export default FilterComponent
