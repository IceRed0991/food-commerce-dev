import { Head } from "../../../components/Head"
import { SnackTitle } from '../../../components/SnackTitle';
import Snacks from "../../../components/Snacks";
import useSnack from "../../../hooks/useSnack";



export default function Burguers() {

  const { burgers } = useSnack()

  return (
    <>
      <Head title="Hambúrguer" description="Nossos Melhores Burguers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
