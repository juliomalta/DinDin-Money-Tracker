import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(['deposit', 'withdraw']),
})
//  .positive() no amount

type NewTransactionFormValues = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const { control, register, handleSubmit, formState: { isSubmitting }, reset, } = useForm<NewTransactionFormValues>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'deposit'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormValues) {
    const { description, amount, category, type } = data;

    await createTransaction({
      description,
      amount,
      category,
      type
    })
    

    // console.log(response.data)

    reset();
  }

  return (
    <Dialog.Portal>
            <Overlay />

            <Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              <CloseButton>
                  <X size={24} />
              </CloseButton>
              <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input 
                  type="text"
                  placeholder="Descrição" 
                  required 
                  {...register('description')}
                />
                <input 
                  type="number" 
                  placeholder="Valor"                  required 
                {...register('amount', { valueAsNumber: true })}/>
                <input type="text" placeholder="Categoria" required 
                {...register('category')}/>

                <Controller 
                  control={control}
                  name="type"
                  render={({ field }) => {
                    return (
                      <TransactionType 
                        onValueChange={field.onChange}
                        value={field.value}>
                        <TransactionTypeButton variant="deposit" value="deposit">
                          <ArrowCircleUp size={24} />
                          Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="withdraw" value="withdraw">
                          <ArrowCircleDown size={24} />
                          Saída
                        </TransactionTypeButton>
                      </TransactionType>

                    )
                  }}
                  />

                <button type="submit" disabled={isSubmitting}>Cadastrar</button>
              </form>

            </Content>

          </Dialog.Portal>
  )
}