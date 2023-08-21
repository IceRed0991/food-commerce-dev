import { useState, useEffect } from "react";
import { Head } from "../../../components/Head"
import { SnackTitle } from '../../../components/SnackTitle';
import Snacks from "../../../components/Snacks";
import { getBurguers } from "../../../services/api";
import { SnackData } from "../../../intarfaces/SnackData";


export default function Burguers() {
  const [burgers, setBurgers] = useState<SnackData[]>([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurguers()

      setBurgers(burgerRequest.data)
    })()
  }, [])



  return (
    <>
      <Head title="Hambúrguer" description="Nossos Melhores Burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
