import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  explore: undefined; // Adicione outras rotas conforme necessário
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('explore'); // Certifique-se de que 'SecondPage' está registrado nas rotas
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui tem osmelhores wallpapers do idolo Portugues</Text>
      <Image
        source={{ uri: 'https://wallpapers.com/images/high/cristiano-ronaldo-cool-superstar-digital-art-8raa1djxuh7keyju.webp' }} // Substitua pela URL do wallpaper
        style={styles.wallpaper}
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  wallpaper: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
