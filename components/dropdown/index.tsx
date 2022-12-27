import Tippy from "@tippyjs/react";
import { Message } from "../tooltip/style";
import { Container } from "./style";

export default function Dropdown({ children }: any) {

  return (
    <Tippy
      interactiveBorder={30}
      content={
        <Container>
          <Message onClick={() => alert("teste")}>Teste</Message>
          <Message>Teste 2</Message>
          <Message>Teste 2</Message>
        </Container>
      }
    >
      {children}
    </Tippy>
  )
}