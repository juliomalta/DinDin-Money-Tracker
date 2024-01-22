import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormValues = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTrasactions(data: SearchFormValues) {
    console.log(data)
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