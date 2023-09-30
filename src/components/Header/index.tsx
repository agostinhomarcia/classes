import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton } from "./styles";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "../../assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <CaretLeft color="#00875F" size={32} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
