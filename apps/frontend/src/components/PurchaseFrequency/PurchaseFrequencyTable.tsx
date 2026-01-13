import { usePurchaseFrequency } from '../../hooks/usePurchaseFrequency'

interface PurchaseFrequencyTableProps {
  from: string
  to: string
}

const PurchaseFrequencyTable = ({ from, to }: PurchaseFrequencyTableProps) => {
  const { data } = usePurchaseFrequency({ from, to })

  return (
    <div>
      <h2>가격대별 구매 빈도</h2>
      <table>
        <thead>
          <tr>
            <th>가격대</th>
            <th>구매 횟수</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.range}>
              <td>{item.range}</td>
              <td>{item.count}건</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PurchaseFrequencyTable
