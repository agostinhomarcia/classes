import { useState } from "react";
import { Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

import { groupCreate } from "@storage/group/groupCreate";

import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Highlight } from "../../components/HighLight";
import { Input } from "../../components/Input";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleAddTeams() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo Grupo", "Informe o nome da turma");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao criar o grupo");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleAddTeams}
        />
      </Content>
    </Container>
  );
}
