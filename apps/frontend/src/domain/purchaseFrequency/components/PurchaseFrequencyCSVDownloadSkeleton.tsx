import styled from '@emotion/styled'
import Spinner from '@/common/components/Spinner'

const PurchaseFrequencyCSVDownloadSkeleton = () => {
  return (
    <StyledButton disabled>
      <Spinner size={16} color="white" />
    </StyledButton>
  )
}

export default PurchaseFrequencyCSVDownloadSkeleton

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 36px;
  padding: 8px 16px;
  background-color: #93c5fd;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  box-sizing: border-box;
  cursor: not-allowed;
`
