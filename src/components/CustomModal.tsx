// @ts-nocheck

import PropTypes from 'prop-types'
import { Modal } from 'fv-modal-react'

export default function CustomModal({
  setIsOpen,
  tempFirstName,
  tempLastName,
}) {
  return (
    <Modal
      setIsOpen={setIsOpen}
      text={tempFirstName + ' ' + tempLastName + ' is saved.'}
      // Custom the background of the modal
      modalBgColor={'var(--green0)'}
      modalBorder={'3px solid white'}
      modalBorderRadius={'20px'}
      // Custom the closing cross
      crossCloseBg={'var(--cross-close-bg-color)'}
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

CustomModal.propTypes = {
  setIsOpen: PropTypes.func,
  tempFirstName: PropTypes.string,
  tempLastName: PropTypes.string,
}
