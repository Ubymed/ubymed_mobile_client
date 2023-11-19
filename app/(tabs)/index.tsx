import React, { useState, useEffect } from 'react';
import { Pressable } from "react-native";
import { Link } from "expo-router";
import { Text, View, FlatList, ActivityIndicator } from '../../components/Themed';
import { SectionHeader } from '../../components/SectionHeader';
import { obtenerServiciosDisponibles } from '../../api/ubymed';
import { Servicio } from '../../types/servicios';

export default function InicioScreen() {
  const [servicios, setServicios] = useState<Servicio[] | null>(null);

  useEffect(() => {
    obtenerServiciosDisponibles()
      .then((data) => {
        setServicios(data);
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
              pathname: "/modal",
              params: { nombre: item.nombre, descripcion: item.descripcion },
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