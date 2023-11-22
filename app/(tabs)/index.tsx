import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, SectionList, RefreshControl } from "react-native";
import { Link } from "expo-router";
import { Text, View, FlatList, ActivityIndicator } from '../../components/Themed';
import { SectionHeader } from '../../components/SectionHeader';
import { obtenerUbymedAPI } from '../../api/ubymed';
import { Servicio } from '../../types/servicios';
import { ServicioCard } from '../../components/Cards';

export default function InicioScreen() {
  const [servicios, setServicios] = useState<Servicio[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(() => {
    obtenerUbymedAPI("servicios")
      .then((data) => {
        const serviciosActivos = data
          .filter((servicio: Servicio) => servicio.active)
          .sort((a: Servicio, b: Servicio) => a.sort_index - b.sort_index);
        setServicios(serviciosActivos);
      })
      .catch((error) => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  }, [loadData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
              pathname: `/${item.url}`,
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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <ActivityIndicator/>
      )}
    </View>
  );
}

