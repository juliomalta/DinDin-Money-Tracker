import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionType, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <TransactionType variant="deposit">
                  R$ 12.000,00
                </TransactionType>
              </td>
              <td>Venda</td>
              <td>14/01/2024</td>
            </tr>
            <tr>
              <td width="50%">Lanche</td>
              <td>
                <TransactionType variant="withdraw">
                  - R$ 59,00
                </TransactionType>
              </td>
              <td>Alimentação</td>
              <td>7/01/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}