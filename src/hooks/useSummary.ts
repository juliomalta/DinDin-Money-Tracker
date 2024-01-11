  import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.price
      acc.total += transaction.price

    } else {
      acc.withdraw += transaction.price
      acc.total -= transaction.price
    
    }

    return acc;
  },
  {
    deposit: 0,
    withdraw: 0,
    total: 0
  })
  
  return summary;
}