import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface SpinnerProps {
  size?: number
  color?: string
}

const Spinner = ({ size = 16, color = 'currentColor' }: SpinnerProps) => {
  return (
    <SpinnerSvg size={size} color={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
    </SpinnerSvg>
  )
}

export default Spinner

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerSvg = styled.svg<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${spin} 0.8s linear infinite;

  circle {
    fill: none;
    stroke: ${(props) => props.color};
    stroke-width: 3;
    stroke-dasharray: 50;
    stroke-dashoffset: 25;
    stroke-linecap: round;
  }
`
