// LIBRARIES
import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, SectionList } from "react-native";
import { Stack, Link, useLocalSearchParams } from 'expo-router';
// COMPONENTS
import { Text, View, FlatList, ActivityIndicator  } from '../../../components/Themed';
import { CategoryCard } from '../../../components/Cards';
import { SectionHeader } from '../../../components/SectionHeader';
// TYPES
import { CatalogoConsultaMedica } from "../../../types/servicios";
// API
import { obtenerUbymedAPI } from '../../../api/ubymed';

export default function ConsultasScreen() {
  const params = useLocalSearchParams();
  const { nombre, descripcion, descripcion_larga, tiempo_estimado, precio, cobertura, img_url, url } = params;
  const [catalogoConsultas, setCatalogo] = useState<CatalogoConsultaMedica[] | null>(null);

  const loadData = useCallback(() => {
    obtenerUbymedAPI(url)
      .then((data) => {
        const serviciosActivos = data
          .filter((servicio: CatalogoConsultaMedica) => servicio.active)
          .sort((a: CatalogoConsultaMedica, b: CatalogoConsultaMedica) => a.sort_index - b.sort_index);
        setCatalogo(serviciosActivos);
      })
      .catch((error) => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: nombre.toString() }} />
      {catalogoConsultas ? (
        <SectionList
        sections={[
          { title: 'Consultas Disponibles', data: catalogoConsultas },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={{
            pathname: "servicios/consultas/detalles",
            params: { nombre: item.nombre, descripcion: item.descripcion, descripcion_larga: item.descripcion_larga, tiempo_estimado: item.tiempo_estimado, precio: item.precio, cobertura: item.cobertura, url: item.url, img_url: item.img_url },
          }} asChild>
            <Pressable>
              <CategoryCard nombre={item.nombre} descripcion={item.descripcion} />
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

