import React, { useState, useEffect } from 'react';
import { Pressable, SectionList } from "react-native";
import { Link } from "expo-router";
import { Text, View, FlatList, ActivityIndicator } from '../../components/Themed';
import { SectionHeader } from '../../components/SectionHeader';
import { obtenerUbymedAPI } from '../../api/ubymed';
import { Servicio } from '../../types/servicios';
import { ServicioCard } from '../../components/Cards';

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
    <View style={{ flex: 1 }}>
      {servicios ? (
        <SectionList
          sections={[
            { title: 'Servicios Disponibles', data: servicios },
            { title: 'Directorios', data: servicios },
            { title: 'Promociones', data: servicios },
          ]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={{
              pathname: "/servicios",
              params: { nombre: item.nombre, descripcion: item.descripcion, url: item.url },
            }} asChild>
              <Pressable>
                <ServicioCard nombre={item.nombre} descripcion={item.descripcion} />
              </Pressable>
            </Link>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader title={title} />
          )}
        />
      ) : (
        <ActivityIndicator/>
      )}
    </View>
  );
}

