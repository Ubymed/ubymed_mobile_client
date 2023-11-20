import React, { useState, useEffect } from 'react';
import { Pressable } from "react-native";
import { Link } from "expo-router";
import { Text, View, FlatList, ActivityIndicator } from '../../components/Themed';
import { SectionHeader } from '../../components/SectionHeader';
import { obtenerUbymedAPI } from '../../api/ubymed';
import { Servicio } from '../../types/servicios';

export default function InicioScreen() {
  const [servicios, setServicios] = useState<Servicio[] | null>(null);

  useEffect(() => {
    obtenerUbymedAPI("servicios")
      .then((data) => {
        const serviciosActivos = data.filter((servicio: Servicio) => servicio.is_active);
        setServicios(serviciosActivos);
      })
      .catch((error) => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  return (
    <View>
      <SectionHeader title='Servicios Disponibles'/>
      {servicios ? (
        <FlatList
          data={servicios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={{
              pathname: "/servicios",
              params: { nombre: item.nombre, descripcion: item.descripcion, url: item.url },
            }} asChild>
              <Pressable>
                <Text>{item.nombre}</Text>
              </Pressable>
            </Link>
          )}
        />
      ) : (
        <ActivityIndicator/>
      )}
    </View>
  );
}