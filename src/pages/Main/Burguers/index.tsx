import { useContext } from "react";
import { Head } from "../../../components/Head"
import { SnackTitle } from '../../../components/SnackTitle';
import Snacks from "../../../components/Snacks";

import { SnackContext } from "../../../App";



export default function Burguers() {

  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title="Hambúrguer" description="Nossos Melhores Burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
