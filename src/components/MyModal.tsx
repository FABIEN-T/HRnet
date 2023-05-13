import { Modal } from 'fv-modal-react'

export default function MyModal({ setIsOpen, tempFirstName, tempLastName }) {
  return (
    <Modal
      setIsOpen={setIsOpen}
      text={tempFirstName + ' ' + tempLastName + ' is saved.'}
      modalBgColor={'#576c05'}
      modalBorder={'3px solid white'}
      modalBorderRadius={'20px'}
      crossCloseBg={'#2b3603'}
      crossCloseColor={'white'}
      crossCloseBorder={'3px solid white'}
      fontFamily={'Trebuchet MS'}
      fontSize={'20px'}
      fontColor={'white'}
      textAlign={'left'}
    />
  )
}
