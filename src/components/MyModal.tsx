import { Modal } from 'fv-modal-react'

export default function MyModal({ setIsOpen, tempFirstName, tempLastName }) {
  return (
    <Modal
      setIsOpen={setIsOpen}
      text={tempFirstName + ' ' + tempLastName + ' is saved.'}
      // Custom the background of the modal
      modalBgColor={'#576c05'}
      modalBorder={'3px solid white'}
      modalBorderRadius={'20px'}
      // Custom the closing cross
      crossCloseBg={'#2b3603'}
      crossCloseColor={'white'}
      crossCloseBorder={'3px solid white'}
      // Custom the font
      fontFamily={'Trebuchet MS'}
      fontSize={'20px'}
      fontColor={'white'}
      textAlign={'left'}
    />
  )
}
