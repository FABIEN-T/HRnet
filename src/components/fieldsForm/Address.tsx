// @ts-nocheck
import Street from './Street'
import City from './City'
import SelectState from './SelectState'
import ZipCode from './ZipCode'

export default function Address() {
  return (
    <>
      <fieldset>
        <legend>Address</legend>
        <div>
          <Street />
          <City />
          <SelectState />
          <ZipCode />
        </div>
      </fieldset>
    </>
  )
}
