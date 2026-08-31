import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type Product = {
  id: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    id: "1",
    title: "Livros",
    price: "Livro Ingles",
  }
]

export default function App() {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>Biblioteca</ScreenTitle>
        <SearchInput placeholder="Buscar Livros" />
      </Header>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={() => (
          <ProductCard>
            <ProductInfo>
              <ProductTitle />
              <Price />
            </ProductInfo>
          </ProductCard>
        )}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #222;
`;

const ScreenTitle = styled.Text`
  font-size: 24px;
  color: #222;
  margin-bottom: 12px;
`;

const SearchInput = styled.TextInput`
  border-width: 1px;
  border-color: #bbb;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  margin-bottom: 12px;
`;

const ProductCard = styled.Pressable`
  flex: 1;
`;

const ProductInfo = styled.View`
  padding-top: 8px;
`;

const ProductTitle = styled.Text`
  font-size: 13px;
  color: #555;
  background-color: #eee;
  padding: 4px 6px;
  border-radius: 4px;
`;

const Price = styled.Text`
  font-size: 18px;
  color: #222;
  margin-top: 8px;
`;

const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 8px;
`;

const BottomBarButton = styled.Pressable`
  width: 40px;
  height: 40px;
`;

