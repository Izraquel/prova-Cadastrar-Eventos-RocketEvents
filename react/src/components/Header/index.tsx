import logo from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewModal: () => void;
}

export function Header({ onOpenNewModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Rocket Eventos" />
        <h2>Rocket Events</h2>
        <button type="button" onClick={onOpenNewModal}>
          Incluir
        </button>
      </Content>
    </Container>
  );
}
