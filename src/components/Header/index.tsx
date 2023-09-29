import { Container, Logo, BackButton } from "./styles";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "../../assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <CaretLeft color="#00875F" size={32} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
