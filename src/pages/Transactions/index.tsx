import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionType, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  category: string;
  type: 'deposit' | 'withdraw';
  price: number;
  date: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function handleSearchTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    handleSearchTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <TransactionType variant={transaction.type}>
                      {transaction.price}
                    </TransactionType>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.date}</td>
                </tr>

              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}