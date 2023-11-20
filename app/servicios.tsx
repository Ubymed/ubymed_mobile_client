import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { useLocalSearchParams } from "expo-router";
import { Text, View, FlatList, ActivityIndicator  } from '../components/Themed';
import { obtenerUbymedAPI } from '../api/ubymed';
import { CatalogoConsultaMedica } from "../types/servicios";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function ServiciosScreen() {
  const params = useLocalSearchParams();
  const { nombre, descripcion, url } = params;
  const [catalogoConsultas, setCatalogo] = useState<CatalogoConsultaMedica[] | null>(null);

  useEffect(() => {
    obtenerUbymedAPI(url)
      .then((data) => {
        setCatalogo(data);
      })
      .catch((error) => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{
          title: nombre.toString(),
        }}
      />
      <Text>{nombre}</Text>
      <Text>{descripcion}</Text>
      {catalogoConsultas ? (
        <FlatList
          data={catalogoConsultas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>{item.nombre}</Text>
          )}
        />
      ) : (
        <ActivityIndicator/>
      )}
    </View>
  );
}

