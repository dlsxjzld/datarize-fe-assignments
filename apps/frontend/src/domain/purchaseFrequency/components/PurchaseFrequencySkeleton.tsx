import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Container, Title, Table, Thead, Th, Td } from './PurchaseFrequencyTable'

const PurchaseFrequencySkeleton = () => {
  return (
    <Container>
      <SkeletonTitle />
      <Table>
        <Thead>
          <tr>
            <SkeletonTh />
            <SkeletonTh />
          </tr>
        </Thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <SkeletonTd />
              <SkeletonTd />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default PurchaseFrequencySkeleton

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

const SkeletonTitle = styled(Title)`
  width: 180px;
  height: 24px;
  background: linear-gradient(90deg, #e5e7eb 25%, #d1d5db 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`

const SkeletonTh = styled(Th)`
  background: linear-gradient(90deg, #e0e7f1 25%, #cbd5e1 50%, #e0e7f1 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  height: 20px;
`

const SkeletonTd = styled(Td)`
  background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  height: 16px;
`
