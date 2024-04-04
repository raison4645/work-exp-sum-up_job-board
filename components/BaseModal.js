import { Modal, Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute',
  background: "white",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 400,
  boxShadow: 24 ,
  p: 4,
  borderRadius: 2,
}

const iconStyle = {
  position: 'absolute',
  top: 25,
  right: 25,
  cursor: 'pointer'
}

export default function BaseModal({ toggleModal, setToggleModal, height, width, content }) {
  return (
    <Modal
      open={toggleModal}
      onClose={() => setToggleModal(false)}
    >
      <Box sx={{...modalStyle, height: height, width: width}}>
        {content}
        <CloseIcon
          sx={iconStyle}
          onClick={() => setToggleModal(false)}
        />
      </Box>
    </Modal>
  )
}
