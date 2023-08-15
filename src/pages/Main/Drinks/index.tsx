import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import Snacks from "../../../components/Snacks";

export default function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Coca-Cola 2L',
      description: 'A tradicional Coca-Cola que não pode faltar na família Brasileira.',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Guaraná Antarctica',
      description: 'O Irresistível e saboroso Guaraná Antarctica em sua versão de latinha.',
      price: 6.5,
      image: 'https://i.imgur.com/CEH3Jk5.jpeg',
    },
    {
      id: 3,
      snack: 'drink',
      name: 'Suco de Abacaxi',
      description: 'Aquele delicioso suco de abacaxi para deixar tudo mais gostoso!',
      price: 8,
      image: 'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1841-Suco-de-abacaxi-com-ac%E2%95%A0%C2%BAafra%E2%95%A0%C3%A2o-e-leite-de-co%E2%95%A0%C3%A9co.jpg',
    },
  ]
  return (

    <>
      <Head title="Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
