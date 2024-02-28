import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.price
        acc.total += transaction.price
      } else {
        acc.withdraw += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    },
  )

  return summary
}
