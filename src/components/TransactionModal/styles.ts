import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme["gray-900"]};
      color: ${props => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }

    button[type="submit"]{
      height: 58px;
      border: 0;
      padding: 1rem 2rem;
      border-radius: 6px;
      background: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      font-weight: bold;
      cursor: pointer;
      margin-top: 1.5rem;
      transition: background-color 0.4s;

      &:hover {
        background: ${props => props.theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
position: absolute;
background: transparent;
border: 0;
top: 1.5rem;
right: 1.5rem;
cursor: pointer;
font-size: 0;
color: ${props => props.theme["gray-300"]};
`

export const TransactionType = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "deposit" | "withdraw";
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background: ${props => props.theme["gray-700"]};
  padding: 1rem 1.5rem;
  border-radius: 6px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme["gray-300"]}; 

  svg {
    color: ${props => props.variant === "deposit" ? props.theme["green-300"] : props.theme["red-300"]};
  }
`