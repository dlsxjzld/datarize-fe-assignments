import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface ModalHeaderProps {
  title: string
  onClose: () => void
  subtitle?: ReactNode
}

const ModalHeader = ({ title, subtitle, onClose }: ModalHeaderProps) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <CloseButton onClick={onClose}>✕</CloseButton>
      </Header>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  )
}

export default ModalHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`

const Subtitle = styled.div`
  padding: 0 24px 12px;
`
