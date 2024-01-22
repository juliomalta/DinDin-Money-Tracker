import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number().positive(),
  category: z.string(),
  // type: z.enum(['deposit', 'withdraw']),
})

type NewTransactionFormValues = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormValues>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  function handleCreateNewTransaction(data: NewTransactionFormValues) {
    console.log(data)
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
                <input type="text" placeholder="Descrição" required 
                {...register('description')}/>
                <input type="number" placeholder="Valor" required 
                {...register('amount', { valueAsNumber: true })}/>
                <input type="text" placeholder="Categoria" required 
                {...register('category')}/>

                <TransactionType>
                  <TransactionTypeButton variant="deposit" value="deposit">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="withdraw" value="withdraw">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>

                <button type="submit" disabled={isSubmitting}>Cadastrar</button>
              </form>

            </Content>

          </Dialog.Portal>
  )
}