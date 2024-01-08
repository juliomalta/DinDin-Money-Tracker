import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react"

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Pesquisar transações" />
      <button type="submit">
        <MagnifyingGlass /> 
        Pesquisar
        </button>
    </SearchFormContainer>
  )
}