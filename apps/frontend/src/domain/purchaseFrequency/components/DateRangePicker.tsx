import styled from '@emotion/styled'

interface DateRangePickerProps {
  from: string
  to: string
  onFromChange: (value: string) => void
  onToChange: (value: string) => void
  onReset: () => void
}

const DateRangePicker = ({ from, to, onFromChange, onToChange, onReset }: DateRangePickerProps) => {
  return (
    <Container>
      <InputGroup>
        <Label htmlFor="date-from">시작일</Label>
        <DateInput id="date-from" type="date" value={from} onChange={(e) => onFromChange(e.target.value)} />
      </InputGroup>
      <Separator>~</Separator>
      <InputGroup>
        <Label htmlFor="date-to">종료일</Label>
        <DateInput id="date-to" type="date" value={to} onChange={(e) => onToChange(e.target.value)} />
      </InputGroup>
      <ResetButton onClick={onReset}>초기화</ResetButton>
    </Container>
  )
}

export default DateRangePicker

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`

const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  background-color: white;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`

const Separator = styled.span`
  font-size: 16px;
  color: #6b7280;
  padding-bottom: 8px;
`

const ResetButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0;

  &:hover {
    border-color: #9ca3af;
    background-color: #f9fafb;
  }

  &:active {
    background-color: #f3f4f6;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`
