import { Container, Logo, BackButton } from "./styles";
import { CaretLeft, HouseLine } from "phosphor-react-native";

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
      <HouseLine size={44} color="#00B37E" weight="fill" />
    </Container>
  );
}
