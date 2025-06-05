import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function ExploreScreen() {
  const handleDownload = async () => {
    const uri = 'https://via.placeholder.com/300x200.png'; // Substitua por uma URL válida ou use um proxy para CORS

    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Cria um link para download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'wallpaper.jpg'; // Nome do arquivo
      link.click();

      Alert.alert('Download concluído', 'O wallpaper foi baixado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível baixar o wallpaper.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui tem os melhores wallpapers do ídolo Português</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x200.png' }} // Substitua por uma URL válida
        style={styles.wallpaper}
      />
      <TouchableOpacity style={styles.button} onPress={handleDownload}>
        <Text style={styles.buttonText}>Baixar</Text>
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
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});