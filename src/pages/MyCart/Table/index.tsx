import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart"

import { TableDesktop } from "./TableDesktop"
import { TableMobile } from "./TableDesktop/TableMobile";
import { EmptyCard } from "../../../components/EmptyCard";


export function Table() {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  const { cart } = useCart()

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)
    return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
    }
  }, [])

  if (cart.length === 0) {
    return (
      <EmptyCard title='Ops! Parece que você não tem pedidos, peça já' />
    )
  }
  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
