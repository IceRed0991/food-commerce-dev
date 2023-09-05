import { Button, Container } from "./styles";

import manAndBurguerImg from '../../assets/man-and-burger.svg'

interface EmptyCardProps {
  title: string;
}

export function EmptyCard({ title }: EmptyCardProps) {
  return (

    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o Cardápio</Button>
      <img src={manAndBurguerImg} alt="Homem com Hambúrguer"></img>
    </Container>
  )

}
