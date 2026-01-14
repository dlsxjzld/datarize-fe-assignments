import styled from '@emotion/styled'

interface CustomerListControlsProps {
  sortLabel: string
  searchName: string
  onSortToggle: () => void
  onSearchChange: (value: string) => void
}

const CustomerListControls = ({ sortLabel, searchName, onSortToggle, onSearchChange }: CustomerListControlsProps) => {
  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="고객 이름 검색..."
        value={searchName}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <SortButton onClick={onSortToggle}>{sortLabel}</SortButton>
    </Container>
  )
}

export default CustomerListControls

const Container = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

const SearchInput = styled.input`
  width: 100px;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  background-color: white;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`

const SortButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  background-color: white;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    border-color: #9ca3af;
    background-color: #f9fafb;
  }

  &:active {
    background-color: #f3f4f6;
  }
`
