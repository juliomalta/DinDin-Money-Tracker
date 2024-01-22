import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormValues = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema)
  })

 async function handleSearchTrasactions(data: SearchFormValues) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTrasactions)}>
      <input type="text" placeholder="Pesquisar transações"
      {...register('query')} 
    />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass /> 
        Pesquisar
        </button>
    </SearchFormContainer>
  )
}