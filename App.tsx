import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <PetText>Rex - Dog</PetText>
      <PetText>Mia - Cat</PetText>
      <PetText>Tweety - Bird</PetText>
      <PetText>Thor - Dog</PetText>
      <PetText>Luna - Cat</PetText>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #00defc;
  align-items: center;
  justify-content: center;
`;

const PetText = styled.Text``;