// export const dateFormatter = new Intl.DateTimeFormat('pt-BR')
export const dateFormatter = (date: Date) => {
  return (
    new Date(date).toLocaleDateString('pt-BR')
  )
}

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
