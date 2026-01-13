import styled from '@emotion/styled'
import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <ErrorContainer role="alert">
      <ErrorTitle>오류가 발생했습니다</ErrorTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>다시 시도하기</RetryButton>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  padding: 20px;
  border: 1px solid #e53e3e;
  border-radius: 8px;
  background-color: #fff5f5;
  margin: 20px 0;
`

const ErrorTitle = styled.h2`
  color: #c53030;
  margin: 0 0 12px 0;
  font-size: 18px;
`

const ErrorMessage = styled.p`
  margin: 0 0 16px 0;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-word;
`

const RetryButton = styled.button`
  padding: 8px 16px;
  background-color: #e53e3e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c53030;
  }
`
