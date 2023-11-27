// LIBRARIES
import { StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
// COMPONENTS
import { Text, View } from '../../../components/Themed';
import { BottomButton } from '../../../components/Buttons';
import { SimpleTable } from '../../../components/Tables';
// API
import { obtenerUbymedAPI } from '../../../api/ubymed';


export default function ConsultasDetallesScreen() {
  const params = useLocalSearchParams();
  const { nombre, descripcion, descripcion_larga, tiempo_estimado, precio, cobertura, img_url, url } = params;
  const data = [
    { title: 'Cobertura', detail: cobertura },
    { title: 'Demora', detail: tiempo_estimado },
    { title: 'Precio', detail: "Q "+ precio },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Detalles", headerBackTitleVisible: false }} />
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: img_url }}
        />
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.description}>{descripcion_larga}</Text>
        <SimpleTable data={data} />
        <Link href={{
          pathname: "/ordenes/consultas/cliente",
        }} asChild>
          <Pressable>
            <BottomButton title="Solicitar" />
          </Pressable>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center', // Alinear texto al centro
    marginLeft: 24,
    marginRight: 24,
  },
  description: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center', // Alinear texto al centro
    marginLeft: 24,
    marginRight: 24,
  },
  image: {
    width: '100%', // Ancho completo
    height: '90%', // Altura fija
    resizeMode: 'cover', // Mantener la relación de aspecto de la imagen
  },
});