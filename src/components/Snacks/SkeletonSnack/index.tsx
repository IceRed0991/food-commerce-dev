import Skeleton from "../../Skeleton"
import { Container } from "../styles"

export default function SkeletonSnack() {
  return <div className='skeleton-wrapper'>
    <Container>
      <Skeleton type='title' />
    </Container>
  </div>
}
