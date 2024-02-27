import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  category: string;
  type: 'deposit' | 'withdraw';
  price: number;
  date: string;
}

interface CreateTransactionData {
  description: string;
  amount: number;
  category: string;
  type: 'deposit' | 'withdraw';
  
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'date',
        _order: 'desc',
        q: query,
      }
    })

  setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionData) {
    const { description, amount, category, type } = data;

    const response = await api.post('transactions', {
      description,
      amount,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, []);

  return (
    <TransactionsContext.Provider value={{ 
      transactions, 
      fetchTransactions,
      createTransaction, 
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}