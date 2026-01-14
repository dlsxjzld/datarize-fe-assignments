import styled from '@emotion/styled'
import { ReactNode } from 'react'
import Portal from './Portal'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  maxWidth?: string
}

const Modal = ({ isOpen, onClose, children, maxWidth = '800px' }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()} $maxWidth={maxWidth}>
          {children}
        </ModalContainer>
      </Overlay>
    </Portal>
  )
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContainer = styled.div<{ $maxWidth: string }>`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: ${(props) => props.$maxWidth};
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`
