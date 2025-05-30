import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  const wallpapers = [
    {
      id: 1,
      uri: 'https://wallpapers.com/images/high/cristiano-ronaldo-cool-portugal-footballer-8kcm9hpcc3xgtcb7.webp',
      title: 'Wallpaper 1',
    },
    {
      id: 2,
      uri: 'https://wallpapers.com/images/high/cristiano-ronaldo-cool-juventus-jersey-isbwr0lnw8aeu6cx.webp',
      title: 'Wallpaper 2',
    },
    {
      id: 3,
      uri: 'https://wallpapers.com/images/high/cristiano-ronaldo-cool-nike-cr7-qiisxdp5rlnv5ypq.webp',
      title: 'Wallpaper 3',
    },
    {
      id: 4,
      uri: 'https://wallpapers.com/images/high/drenched-cristiano-ronaldo-6x6e6pygqydigkfl.webp',
      title: 'Wallpaper 4',
    },
    {
      id: 5,
      uri: 'https://wallpapers.com/images/high/cr7-hd-raising-arms-j2w4f63k30vhzqom.webp',
      title: 'Wallpaper 5',
    },
  ];

  const handleDownload = (uri: string) => {
    // Lógica para baixar o wallpaper
    console.log(`Baixando wallpaper: ${uri}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Explore e baixe os melhores wallpapers!</Text>
        {wallpapers.map((wallpaper) => (
          <View key={wallpaper.id} style={styles.wallpaperContainer}>
            <Image source={{ uri: wallpaper.uri }} style={styles.wallpaper} />
            <Text style={styles.wallpaperTitle}>{wallpaper.title}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDownload(wallpaper.uri)}
            >
              <Text style={styles.buttonText}>Baixar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  wallpaperContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  wallpaper: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  wallpaperTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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