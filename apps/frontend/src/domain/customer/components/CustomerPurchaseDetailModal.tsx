import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import Modal from '@/common/components/Modal'
import ModalHeader from '@/common/components/ModalHeader'
import { Customer } from '../hooks/useSelectedCustomer'

import { useEscapeKeyDown } from '@/common/hooks/useEscapeKeyDown'
import CustomerPurchaseDetailSection from './CustomerPurchaseDetailSection'

interface CustomerPurchaseDetailModalProps {
  isOpen: boolean
  customer: Customer | null
  dateRange: { from: string; to: string }
  onClose: () => void
}

const CustomerPurchaseDetailModal = ({ isOpen, customer, dateRange, onClose }: CustomerPurchaseDetailModalProps) => {
  const { reset } = useQueryErrorResetBoundary()

  useEscapeKeyDown(onClose, isOpen)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {customer && (
        <>
          <ModalHeader
            title={`${customer.name}님의 구매 내역`}
            subtitle={`총 구매 금액: ${customer.totalAmount.toLocaleString()}원`}
            onClose={onClose}
          />
          <CustomerPurchaseDetailSection customer={customer} dateRange={dateRange} reset={reset} />
        </>
      )}
    </Modal>
  )
}

export default CustomerPurchaseDetailModal
