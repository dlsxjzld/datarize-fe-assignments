import styled from '@emotion/styled'

interface PaginationProps {
  currentPage: number
  totalPages: number
  total: number
  displayCount: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, total, displayCount, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage <= 1) {
      return
    }
    onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage >= totalPages) {
      return
    }
    onPageChange(currentPage + 1)
  }

  if (totalPages <= 1) {
    return null
  }

  return (
    <Wrapper>
      <PaginationInfo>
        총 {total}명 중 {displayCount}명 표시 (페이지 {currentPage}/{totalPages})
      </PaginationInfo>
      <Container>
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          이전
        </Button>
        <PageInfo>
          {currentPage} / {totalPages}
        </PageInfo>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          다음
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Pagination

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  gap: 8px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: #9ca3af;
    background-color: #f9fafb;
  }

  &:active:not(:disabled) {
    background-color: #f3f4f6;
  }

  &:disabled {
    color: #d1d5db;
    cursor: not-allowed;
  }
`

const PageInfo = styled.span`
  font-size: 14px;
  color: #1f2937;
  min-width: 80px;
  text-align: center;
`

const PaginationInfo = styled.div`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  width: 100%;
`
