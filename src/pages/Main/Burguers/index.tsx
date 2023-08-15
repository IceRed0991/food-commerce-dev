import { Head } from "../../../components/Head"
import { SnackTitle } from '../../../components/SnackTitle';
import Snacks from "../../../components/Snacks";


export default function Burguers() {
  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'O artesanal tamanho familia recheado com três carnes suculentas queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/R72rW81.jpeg',
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra bacon',
      description: 'Criado para os amantes de bancon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.5,
      image: 'https://i.imgur.com/uRVpW7J.jpeg',
    },
  ]

  return (
    <>
      <Head title="Hambúrguer" description="Nossos Melhores Burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
