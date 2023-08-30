import { Container } from "./styles";
import { useCart } from "../../../../hooks/useCart";
import currencyFormat from "../../../../helpers/currencyFormat";

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'

export function TableDesktop() {
  const { cart } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtde</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr key={`${item.snack}-${item.id}`}>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>
                  <h4>{item.name}</h4>
                  <span>{currencyFormat(item.price)}</span>
                </td>
                <td>
                  <div>
                    <button type='button' onClick={() => console.log('-1', item)}>
                      <img src={minusImg} alt="Remover Quantidade" />
                    </button>
                    <span>{`${item.quantity}`.padStart(2, '0')}</span>
                    <button type='button' onClick={() => console.log('+1', item)}>
                      <img src={plusImg} alt="Adicionar Quantidade" />
                    </button>
                  </div>
                </td>
                <td>
                  <h5>{currencyFormat(item.subtotal)}</h5>
                </td>
                <td>Deletar</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>

  )
}
