import { BiTargetLock } from "react-icons/bi";
import { GiTriangleTarget } from "react-icons/gi";
import { Container } from "./style";

export default function Tab() {
  return (
    <Container
      icon={<BiTargetLock/>}
    >
      <BiTargetLock/>
      <GiTriangleTarget/>
    </Container>
  )
}